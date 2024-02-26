import { useState, useEffect } from 'react';

const SiteMonitor = () => {
    const [isOnline, setIsOnline] = useState(false);
    const [isError, setIsError] = useState('')

    useEffect(() => {
        const checkOnlineStatus = async () => {
            try {
                const response = await fetch('https://www.google.com');
                if (response.ok) {
                    setIsOnline(true);
                }
            } catch (error) {
                setIsOnline(false);
                setIsError(error)
            }
        };

        // Define um intervalo para verificar o status online do site a cada 1 minuto
        const interval = setInterval(checkOnlineStatus, 60000);

        // Verifica o status online imediatamente ao montar o componente
        checkOnlineStatus();

        // Limpa o intervalo ao desmontar o componente para evitar vazamentos de memória
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Monitor de Site</h1>
            <p>O site está atualmente: {isOnline ? 'online' : 'offline'}</p>
            {isError ? (
                <p>{isError}</p>
            ) : (null)}
        </div>
    );
};

export default SiteMonitor;