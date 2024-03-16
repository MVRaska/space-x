
export const initialState = {
    launches: [],
    loading: false,
    error: null,
};

export const launchesReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_LAUNCHES_REQUEST':
            return {...state, loading: true, error: null};
        case 'FETCH_LAUNCHES_SUCCESS':
            return {...state, loading: false, launches: action.payload};
        case 'FETCH_LAUNCHES_FAILURE':
            return {...state, loading: false, error: action.payload /*false*/ };
        default:
            return state;
    }
}

/*
V
Implementacija Contexta i Reducera za Upravljanje Stanjem Podataka o Lansiranjima
Vaš zadatak je implementirati Context i Reducer kako biste upravljali stanjem podataka o lansiranjima
raketa SpaceX-a u vašoj React aplikaciji. Takođe, potrebno je refaktorisati postojeću komponentu
LaunchesView kako bi koristila ovaj Context za prikazivanje podataka o lansiranjima.

Koraci:
Definisanje Početnog Stanja i Reducera:
Definišite početno stanje koje će sadržati informacije o lansiranjima, kao i podatke o tome da li se
podaci učitavaju i da li je došlo do greške. (launches, loading, error)
Implementirajte Reducer funkciju koja će upravljati promenama u state-a aplikacije. Reducer
treba da može da obrađuje akcije za zahtevanje podataka o lansiranjima, uspešno dohvatanje
podataka i slučajeve kada dođe do greške.
Kreiranje Contexta i Providera:
Kreirajte Context koji će omogućiti komponentama pristup state-u podataka o lansiranjima i
dispatch funkciji za ažuriranje tog stanja.
Implementirajte ContextProvider komponentu koja će obavijati vašu aplikaciju i pružati state i
dispatch funkciju reducera, komponentama unutar vaše aplikacije.
Refaktorisanje Komponente LaunchesView:
Modifikujte postojeću komponentu LaunchesView tako da koristi Context kako bi prikazala
podatke o lansiranjima.
Komponenta treba da reaguje na stanje učitavanja i greške koje su definisane u Contextu i da
prikaže odgovarajući prikaz.
*/