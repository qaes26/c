import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '1rem',
            textAlign: 'center',
            backgroundColor: 'var(--secondary-color)',
            color: 'white',
            marginTop: 'auto'
        }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
                جميع الحقوق محفوظة © {new Date().getFullYear()} | إعداد الطالب: قيس الجازي
            </p>
        </footer>
    );
};

export default Footer;
