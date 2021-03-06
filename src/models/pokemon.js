/**
 *
 */
export default class Pokemon {
    /**
     *
     * @param id number
     * @param hp
     * @param cp
     * @param name
     * @param picture
     * @param types
     * @param created
     */
    constructor(
        id,
        hp = "",
        cp = "",
        name = "",
        picture = "",
        types = ["Normal"],
        created = new Date()
    ) {
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
