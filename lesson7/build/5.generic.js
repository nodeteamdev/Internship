function identities(arg1, arg2) {
    console.log(`${arg1}: ${typeof (arg1)}`);
    console.log(`${arg2}: ${typeof (arg2)}`);
    let identities = {
        id1: arg1,
        id2: arg2
    };
    return identities;
}
identities('string', 2);
