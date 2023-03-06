import React, { useContext, /* useState */ } from 'react'
import { GlobalContext } from '../store/AppContext';

const Home = () => {
    //const [name, setName] = useState("John");

    const { store, actions } = useContext(GlobalContext);
    return (
        <>
            {/* <GlobalContext.Consumer>
                {
                    ({ name, setName }) => {
                        return (
                            <div className='container'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>Home</p>
                                        <p>{name}</p>
                                        <button onClick={() => setName("Jane")}>Set Jane</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer> */}
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Home</h1>
                        <p>{store.name}</p>
                        <button onClick={() => actions.getSaludo()}>Saludar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home