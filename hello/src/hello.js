/**
 * @class Hello
 */
class Hello {
    /**
     * @static
     * @returns {String}
     * @memberof Hello
     */
    static getTemplate() {
        return 'Hello!';
    }

    /**
     * @return {Void}
     * @memberof Hello
     */
    say() {
        console.log(Hello.getTemplate());
    }
}

module.exports = new Hello();