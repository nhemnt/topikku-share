import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import useIsCollapsed from '@/hooks/use-is-collapsed';
import Sidebar from '../sidebar';
import { LayoutBody, LayoutHeader } from './layout';
import ThemeSwitch from '../theme-switch';
import { UserNav } from '../user-nav';

interface LayoutProps {
    auth?: boolean;
    children: React.ReactNode;
    error?: {
        status: number;
    } | null;
    errorRecoverCallback?: () => void;
    footer?: boolean;
    header?: boolean;
    // localeId: string;
    [key: string]: any; // Additional attributes
}

const Layout: React.FC<LayoutProps> = ({
    auth = true,
    children,
    error,
    errorRecoverCallback,
    footer = true,
    header = true,
    ...attrs
}) => {

    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useIsCollapsed()
    const pageContent = useMemo(() => {
        if (!auth) return children;
        return (
            <div className='relative h-full overflow-hidden bg-background'>
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

                <main
                    id='content'
                    className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
                >
                    <LayoutHeader>
                        <div className='flex w-full items-center justify-end'>
                            <div className='flex items-center space-x-4'>
                                <ThemeSwitch />
                                <UserNav />
                            </div>
                        </div>
                    </LayoutHeader>
                    <LayoutBody className='space-y-4'>
                        {children}
                    </LayoutBody>
                   
                </main>
            </div>
        )
        // if (!error) return children;

        // if (error) {
        //     return <Error statusCode={error.status} />;
        // }
    }, [children, isCollapsed, auth]);

    return pageContent;
};


export default Layout;

export function withLayout<T>(
    Component: React.ComponentType<T>,
    options: any,
    LayoutComponent = Layout
) {
    (Component as any).layout = LayoutComponent;
    (Component as any).options = options;
    return Component;
}
