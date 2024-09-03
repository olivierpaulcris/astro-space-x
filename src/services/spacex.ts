import { type Doc, type APISpaceXResponse } from '../types/api';

export const getLaunchById = async ({ id }: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const launches = (await res.json()) as Doc;

    return launches;
}

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 300,
            },
        })
    });

    const { docs: launches } = (await res.json()) as APISpaceXResponse;

    console.log("longitud")
    console.log(launches.length)


    return launches;
}