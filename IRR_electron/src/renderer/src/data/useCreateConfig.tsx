import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getMainboardSKU, getMainboardProduct, getMainboardProfile } from "@renderer/services/mainboard"
import testsParams from '../data/paramsTests'

export default function useCreateConfig() {

    const [ProfileData, setProfileData] = useState();
    const [tests, setTests] = useState()

    const { data } = useQuery({
        queryKey: ['SSID'],
        queryFn: getMainboardProduct,
        refetchOnWindowFocus: false
    })


    const { data: skudata } = useQuery({
        queryKey: ['sku'],
        queryFn: getMainboardSKU,
        refetchOnWindowFocus: false,
        retry: false,
    })


    const createConfig = (testsfield) => {
        const config = testsParams.map((test) => {
            // Encontramos el objeto correspondiente en `testsfield`
            const match = testsfield.find((t) => t.name === test.name);

            if (match) {
                // Si encontramos una coincidencia, podemos acceder a los valores de `match` y `test`
                return {
                    ...test,
                    // Aquí puedes agregar o modificar propiedades del objeto `test` usando valores de `match`
                    params: { ...match?.params }
                };
            }
            return null; // Devolvemos `null` si no hay coincidencia
        }).filter(test => test !== null); // Filtramos los valores `null` del arreglo

        console.log(config)

        // @ts-ignore
        setTests(config);
    }



    useEffect(() => {

        if (data && skudata) {
            const sku = skudata?.sku;
            const ssid = data?.product
            const MainboardAuthID = ssid && sku ? `${ssid}&${sku}` : null;

            //@ts-ignore
            getMainboardProfile(MainboardAuthID).then((res) => {
                setProfileData(res)
                createConfig(res?.tests)
            })

        }


    }, [data, skudata])

    return { ProfileData, tests }
}

