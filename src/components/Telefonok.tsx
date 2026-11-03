import { useEffect, useState } from "react";

type Telefon = {
    id: number;
    nev: string;
    gyarto: string;
    ar: number;
    memoria: number;
}

export function Telefonok() {
    const URL = "phones.json";

    const [novekvo, setNovekvo] = useState<boolean>(false);

    const [telefonok, setTelefonok] = useState<Telefon[]>([]);

    useEffect(() => {
        async function adatokBetoltese() {
            try {
                const valasz = await fetch(URL);
                const adatok: Telefon[] = await valasz.json();

                setTelefonok(adatok.toSorted((a, b) => a.ar - b.ar));
            } catch (err) {
                console.error(err);
            }
        }
        adatokBetoltese();
    }, [])

    useEffect(() => {
        setTelefonok(telefonok.toReversed())
    }, [novekvo]);

    useEffect

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Név</td>
                        <td>gyártó</td>
                        <td>ár</td>
                        <td>memória</td>
                    </tr>
                </thead>

                <tbody>
                    {telefonok.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nev}</td>
                            <td>{item.gyarto}</td>
                            <td>{item.ar}</td>
                            <td>{item.memoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => {
                setNovekvo(!novekvo);
            }}>Irányváltás</button>
        </>
    )



}