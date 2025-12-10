import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
    return (
        <header className="app-header">
            <div className="brand">
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
