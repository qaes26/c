import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            height: 'var(--header-height)',
            backgroundColor: 'var(--white)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <BookOpen color="var(--primary-color)" size={32} />
                <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--primary-color)' }}>
                    كورس C++ الشامل
                </h1>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-light)' }}>
                إعداد الطالب: قيس الجازي
            </div>
        </header>
    );
};

export default Header;
