export const formatDateTime = (isoString: string) => {
    const dateObj = new Date(isoString);

    const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const formattedTime = dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });

    return `${formattedDate} — ${formattedTime}`;
};