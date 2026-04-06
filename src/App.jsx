import { useState, useEffect, useMemo } from 'react';
import { CATEGORIES, DEFAULT_ENTRIES } from './data/defaultEntries';
import EntryCard from './components/EntryCard';
import EntryForm from './components/EntryForm';
import ConfirmDialog from './components/ConfirmDialog';

const STORAGE_KEY = 'glossary-entries';
const FAVORITES_KEY = 'glossary-favorites';

function loadEntries() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const storedIds = new Set(parsed.map((e) => e.id));
      const newDefaults = DEFAULT_ENTRIES.filter((e) => !storedIds.has(e.id));
      return newDefaults.length > 0 ? [...parsed, ...newDefaults] : parsed;
    }
  } catch (e) {
    console.error('Failed to load entries:', e);
  }
  return DEFAULT_ENTRIES;
}

function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) return new Set(JSON.parse(stored));
  } catch (e) {
    console.error('Failed to load favorites:', e);
  }
  return new Set();
}

function saveEntries(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.error('Failed to save entries:', e);
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
  } catch (e) {
    console.error('Failed to save favorites:', e);
  }
}

export default function App() {
  const [entries, setEntries] = useState(loadEntries);
  const [favorites, setFavorites] = useState(loadFavorites);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => { saveEntries(entries); }, [entries]);
  useEffect(() => { saveFavorites(favorites); }, [favorites]);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filteredEntries = useMemo(() => {
    let result = entries;

    if (activeCategory === 'favorites') {
      result = result.filter((e) => favorites.has(e.id));
    } else if (activeCategory !== 'all') {
      result = result.filter((e) => e.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.term.toLowerCase().includes(q) ||
          e.definition.toLowerCase().includes(q) ||
          e.example.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => a.term.localeCompare(b.term));
  }, [entries, favorites, activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts = { all: entries.length };
    CATEGORIES.forEach((c) => {
      counts[c.id] = entries.filter((e) => e.category === c.id).length;
    });
    return counts;
  }, [entries]);

  const handleSave = (entryData) => {
    if (editingEntry) {
      setEntries((prev) =>
        prev.map((e) => (e.id === editingEntry.id ? { ...entryData, id: e.id } : e))
      );
    } else {
      const newEntry = { ...entryData, id: 'custom-' + Date.now() };
      setEntries((prev) => [...prev, newEntry]);
    }
    setShowForm(false);
    setEditingEntry(null);
  };

  const handleEdit = (entry) => { setEditingEntry(entry); setShowForm(true); };
  const handleDelete = (entry) => { setDeleteConfirm(entry); };
  const confirmDelete = () => {
    setEntries((prev) => prev.filter((e) => e.id !== deleteConfirm.id));
    setFavorites((prev) => { const next = new Set(prev); next.delete(deleteConfirm.id); return next; });
    setDeleteConfirm(null);
  };
  const handleCloseForm = () => { setShowForm(false); setEditingEntry(null); };

  const activeCategoryLabel =
    activeCategory === 'favorites'
      ? 'Favorites'
      : activeCategory === 'all'
      ? 'All Entries'
      : CATEGORIES.find((c) => c.id === activeCategory)?.label || 'All Entries';

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Grantmaking Glossary</h1>
          <div className="subtitle">Personal Reference</div>
        </div>
        <nav className="sidebar-nav">
          <div className="sidebar-nav-label">Categories</div>

          <button
            className={`nav-item ${activeCategory === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveCategory('favorites')}
          >
            <span className="nav-icon">⭐</span>
            Favorites
            <span className="nav-count">{favorites.size}</span>
          </button>

          <button
            className={`nav-item ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span className="nav-icon">📚</span>
            All Entries
            <span className="nav-count">{categoryCounts.all}</span>
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`nav-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="nav-icon">{cat.icon}</span>
              {cat.label}
              <span className="nav-count">{categoryCounts[cat.id] || 0}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="top-bar">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search terms, definitions, or examples…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => { setEditingEntry(null); setShowForm(true); }}
          >
            + Add Entry
          </button>
        </div>

        <div className="content-area">
          <div className="content-header">
            <h2>{activeCategoryLabel}</h2>
            <div className="entry-count">
              {filteredEntries.length} {filteredEntries.length === 1 ? 'entry' : 'entries'}
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
          </div>

          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                categoryLabel={CATEGORIES.find((c) => c.id === entry.category)?.label}
                isFavorite={favorites.has(entry.id)}
                onToggleFavorite={handleToggleFavorite}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                {activeCategory === 'favorites' ? '⭐' : '📖'}
              </div>
              <p>
                {activeCategory === 'favorites'
                  ? 'No favorites yet. Star entries to save them here.'
                  : searchQuery
                  ? 'No entries match your search.'
                  : 'No entries in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showForm && (
        <EntryForm
          entry={editingEntry}
          categories={CATEGORIES}
          onSave={handleSave}
          onClose={handleCloseForm}
        />
      )}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <ConfirmDialog
          term={deleteConfirm.term}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  );
}
