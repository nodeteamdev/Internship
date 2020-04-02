interface Identities < V, W > {
    id1: V,
    id2: W
}

function identities < T, U > (arg1: T, arg2: U): Identities < T, U > {
    console.log(`${arg1}: ${typeof (arg1)}`);
    console.log(`${arg2}: ${typeof (arg2)}`);
    
    let identities: Identities < T, U > = {
        id1: arg1,
        id2: arg2
    };
    
    return identities;
}

identities('string', true);