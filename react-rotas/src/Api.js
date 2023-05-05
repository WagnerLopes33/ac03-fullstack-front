import { useEffect, useState } from "react"


const Api = () => {
	const [hello, setHello] = useState("")

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:5000/", {
				headers: {
					"Content-Type": "application/json"
				}
			})
			const json = await res.json()
            return setHello(json)
			})();
        }, [])
	
	return(
		<div>Mensagem: {hello.message}</div>
	)
}

export default Api