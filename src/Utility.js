
export async function postData(url="", data={}) {
    const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log("Retrieved a response!");
        return response.json();
    } else {
        throw response.json();
    }
}

export const restaurantIdOptions = [
    {
        key: 1,
        text: 'Restaurant 1',
        value: 1,
    },
    {
        key: 2,
        text: 'Restaurant 2',
        value: 2,
    },
    {
        key: 3,
        text: 'Restaurant 3',
        value: 3,
    },
    {
        key: 4,
        text: 'Restaurant 4',
        value: 4,
    },
    {
        key: 5,
        text: 'Restaurant 5',
        value: 5,
    },
    {
        key: 6,
        text: 'Restaurant 6',
        value: 6,
    },
    {
        key: 7,
        text: 'Restaurant 7',
        value: 7,
    },
    {
        key: 8,
        text: 'Restaurant 8',
        value: 8,
    },
    {
        key: 9,
        text: 'Restaurant 9',
        value: 9,
    },
    {
        key: 10,
        text: 'Restaurant 10',
        value: 10,
    },
]

export const compareTypeOptions = [
    {
        key: 1,
        text: '=',
        value: 'Equal'
    },
    {
        key: 2,
        text: '<=',
        value: 'LessThanOrEqual'
    },
    {
        key: 3,
        text: '<',
        value: 'LessThan'
    },
    {
        key: 4,
        text: '>',
        value: 'GreaterThan'
    },
    {
        key: 5,
        text: '>=',
        value: 'GreaterThanOrEqual'
    },
]

export const amPmOptions = [
    {
        key: 1,
        text: 'am',
        value: 'am',
    },
    {
        key: 2,
        text: 'pm',
        value: 'pm',
    }
]

export function parseReturnData(data, dataType = undefined) {
    const type = typeof(data);
    if (dataType === "discountRatio") {
        const roundedPercent = (Math.round(data * 10000) / 10000) * 100
        return roundedPercent.toString() + "%";
    } else if (dataType === 'orderNumber' || dataType === 'itemSoldQty' || dataType === 'beverageQty') {
        return data.toString()
    }else if (type === 'number') {
        return "$" + data.toString();
    } else if (dataType === 'busDt') {
        return data.slice(0, 10)
    } else if (type === 'string') {
        return data.slice(11);
    }
}