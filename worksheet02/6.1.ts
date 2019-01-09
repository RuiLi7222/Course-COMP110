export let sidekick = (fa: string[], x: number): void => {
    if (fa[x - 1] === "Scott") {
        x++;
    } else {
        fa[x] = "Scott";
    }
};