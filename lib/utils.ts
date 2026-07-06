export const formatDate = (dataStr: string) => {
    const date = new Date(dataStr);
    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    });
    return formatter.format(date);
};