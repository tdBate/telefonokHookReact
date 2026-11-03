import { useEffect, useState } from "react";

type Telefon = {
    id: number;
    nev: string;
    gyarto: string;
    ar: number;
    memoria: number;
}

export function Telefonok() {
    const URL = "";

    const [telefonok, setTelefonok] = useState<Telefon[]>([]);

    useEffect(() => {
        async function adatokBetoltese() {
            try {
                const valasz = await fetch(URL);
                const adatok: Telefon[] = await valasz.json();

                setTelefonok(adatok);
            } catch (err) {
                console.error(err);
            }
        }
        adatokBetoltese();
    })



}