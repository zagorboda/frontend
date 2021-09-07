import logo from "../../../img/logo.svg";
import './content.css';


function Content() {
    return (
        <>
            <div className="" id="logo_block">
                <div className="content">
                    <h1 className="brand-name title">BRAND</h1>
                    <img src={logo} className="logo" alt='logo'/>
                </div>
            </div>

            <div className="" id="about_block">
                <div className="">
                    <h3 className="title">About</h3>
                    <div className="">
                        <div className="middle-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolores ea facilis
                            fugiat
                            impedit incidunt iure iusto odit porro repellat rerum sequi voluptates! A error facilis nisi
                            odio
                            sapiente sint!
                        </div>
                        <br/>
                        <div className="middle-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolores ea facilis
                            fugiat
                            impedit incidunt iure iusto odit porro repellat rerum sequi voluptates! A error facilis nisi
                            odio
                            sapiente sint!
                        </div>

                    </div>
                </div>
            </div>

            <div className="" id="help_block">
                <div className="">
                    <h3 className="title">Help</h3>
                    <div className="">
                        <p className="middle-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
                            dolores ea facilis fugiat impedit incidunt iure iusto odit porro repellat rerum sequi
                            voluptates!
                            A error facilis nisi odio sapiente sint! Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Dicta dolorem dolores fugiat incidunt inventore, iste maiores officia pariatur, possimus
                            praesentium quis quisquam saepe tempore? At, maxime sed? Ea iste, ullam?
                        </p>

                        <p className="middle-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolores ea facilis
                            fugiat
                            impedit incidunt iure iusto odit porro repellat rerum sequi voluptates! A error facilis nisi
                            odio
                            sapiente sint!
                        </p>

                    </div>
                </div>
            </div>

            <div className="" id="contacts_block">
                <div className="">
                    <h3 className="title">Contacts</h3>
                    <div className="">
                        <p className="contact-info">
                            some_email@gmail.com
                        </p>
                        <p className="contact-info">
                            +234-567-888-123-4
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;