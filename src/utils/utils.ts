
export async function fetchData(url: string, headers = {}) {
    const response = await fetch(url, {
        headers,
        method: 'GET'
    });
    const data = await response.json();
    return data;
}


export function randomColorRGBA() {
    const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomByte = () => randomNumber(0, 255)
    const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
    return `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`;
}