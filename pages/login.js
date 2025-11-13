// pages/login.js
// Einfache Login-Seite (Frontend-only)

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login-Logik kommt später – aktuell ist das nur die Oberfläche 🙂');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#020617',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          background: 'rgba(15,23,42,0.9)',
          borderRadius: 18,
          padding: 24,
          border: '1px solid rgba(148,163,184,0.4)',
          boxShadow: '0 18px 45px rgba(15,23,42,0.8)'
        }}
      >
        {/* Logo / Titel */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 999,
              margin: '0 auto 10px',
              background:
                'radial-gradient(circle at 30% 20%, #f97316, #7c3aed 60%, #0ea5e9 100%)'
            }}
          />
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
            Creator Challenge Network
          </h1>
          <p style={{ fontSize: 13, opacity: 0.75 }}>
            Log dich ein, um Challenges, FanClubs & Rewards zu nutzen.
          </p>
        </div>

        {/* Formular */}
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14 }}>
          <div>
            <label
              htmlFor="email"
              style={{ display: 'block', fontSize: 13, marginBottom: 4 }}
            >
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="du@example.com"
              style={{
               width: 'calc(100% - 50px)',
               borderRadius: 999,
                border: '1px solid rgba(148,163,184,0.7)',
                padding: '9px 14px',
                background: 'rgba(15,23,42,0.95)',
                color: 'white',
                fontSize: 14,
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              style={{ display: 'block', fontSize: 13, marginBottom: 4 }}
            >
              Passwort
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              style={{
 width: 'calc(100% - 15px)',

  height: 46,
  borderRadius: 12,
  border: '1px solid rgba(148,163,184,0.45)',
  padding: '0 14px',
  background: 'rgba(15,23,42,0.92)',
  color: 'white',
  fontSize: 14,
  outline: 'none',
  transition: '0.2s border-color',
}}
onFocus={(e) => (e.target.style.borderColor = '#60a5fa')}
onBlur={(e) => (e.target.style.borderColor = 'rgba(148,163,184,0.45)')}


            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 6,
              width: '100%',
              borderRadius: 999,
              border: 'none',
              padding: '10px 16px',
              background:
                'linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)',
              color: 'white',
              fontWeight: 600,
              fontSize: 15,
              cursor: 'pointer'
            }}
          >
            Einloggen
          </button>
        </form>

        {/* Links unten */}
        <div
          style={{
            marginTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 13
          }}
        >
          <span style={{ opacity: 0.75 }}>
            Noch kein Account?{' '}
            <Link href="/signup" style={{ color: '#60a5fa' }}>
              Registrieren
            </Link>
          </span>
        </div>

        <div
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: 12,
            opacity: 0.6
          }}
        >
          <Link href="/" style={{ color: '#9ca3af' }}>
            ← Zurück zum Feed
          </Link>
        </div>
      </div>
    </div>
  );
}
