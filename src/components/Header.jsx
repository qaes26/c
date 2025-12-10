import React from 'react';
import { GraduationCap, Menu } from 'lucide-react';

const Header = ({ onToggleMenu }) => {
    return (
        <header className="app-header">
            <div className="brand">
                <button className="menu-btn" onClick={onToggleMenu}>
                    <Menu size={24} />
                </button>
                <GraduationCap size={32} color="var(--primary)" />
                <h1>كورس C++ الشامل</h1>
            </div>
            <div className="author-badge">
                إعداد الطالب: قيس الجازي
            </div>
        </header>
    );
};

export default Header;
