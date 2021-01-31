import style from "./style.module.css";

const Layout = ({ id, title, urlBg, colorBg, children }) => {
    // console.log('#####: children:', children);
    return (
        <section 
            className={ style.root } 
            id={ id }
            style={{
                background: urlBg ? `url(${ urlBg })` : 'none',
                backgroundColor: colorBg ? colorBg : 'none',
            }}>
            <div className={ style.wrapper }>
                <article>
                    <div className={ style.title }>
                        <h3>{ title }</h3>
                        <span className={ style.separator }></span>
                    </div>
                    <div className={ style.desc, style.full}>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;