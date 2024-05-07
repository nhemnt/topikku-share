import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';

export default function useIsCollapsed() {
    const [isCollapsed, setIsCollapsed] = useLocalStorage<boolean>({
        key: 'collapsed-sidebar',
        defaultValue: false,
    });

    useEffect(() => {
        const handleResize = () => {
            // Update isCollapsed based on window.innerWidth
            setIsCollapsed(window.innerWidth < 768);
        };

        // Initial setup
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsCollapsed]);

    return [isCollapsed, setIsCollapsed] as const;
}
