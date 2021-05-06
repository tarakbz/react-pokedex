
export default function PokemonCard({pokemon , classes}) {
    return (
        <>
            <img src={pokemon.picture} alt=""/>
            <p className={classes.name}>
                {pokemon.name} <br/>
                <small>
                    {
                        new Intl.DateTimeFormat(
                        ).format(new Date(pokemon.created))
                    }
                </small>
            </p>
        </>
    );
}
