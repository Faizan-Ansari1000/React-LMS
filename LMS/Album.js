import { useEffect, useState } from "react"
import ApiInstance from "../config/Apis/ApiInstance"
import FATable from "../Components/FATable";

export default function Album() {


    const [postData, setPostData] = useState([]);

    const getData = () => {
        ApiInstance.get('/albums')
            .then((res) => {
                console.log(res.data)
                setPostData([...res.data])
            })
            .catch((err) => {
                console.log(err, 'error')
            })
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <>
            <div>
                <div>
                    <FATable
                        data={postData}
                        columns={
                            [
                                {
                                    key: 'id',
                                    label: 'User Id'
                                },
                                {
                                    key: 'title',
                                    label: 'User Title'
                                },
                            ]
                        }
                    />
                </div>
            </div>
        </>
    )
}