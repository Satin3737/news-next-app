import MainHeader from '@/components/layout/MainHeader';
import './globals.scss';

export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.'
};

export default function RootLayout({children}) {
    return (
        <html lang={'en'}>
            <body id={'page'}>
                <MainHeader />
                <main>{children}</main>
            </body>
        </html>
    );
}
