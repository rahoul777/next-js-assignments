// components/ClientOnlyComponent.js
import { useState, useEffect } from 'react';

const ClientOnlyComponent = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <p>Rendered only on the client side!</p>;
};

export default ClientOnlyComponent;