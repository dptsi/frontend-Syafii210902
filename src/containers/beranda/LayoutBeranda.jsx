import BerandaFooter from "../components/BerandaFooter";
import ScriptFooter from "../components/ScriptFooter";
import BerandaMeta from "../components/BerandaMeta";
import BerandaHeader from "../components/BerandaHeader";
import BerandaMenuOffcanvas from "../components/BerandaMenuOffcanvas";
import BerandaMenu from "../components/BerandaMenu";
import Notifikasi from "../components/Notifikasi";

const LayoutBeranda = ({ children }) => {
    return (
        <>
            <BerandaMeta />
            <div className="mn-ht-100v d-flex flex-column" id="content-inner-wrapper">
                <BerandaHeader />
                <BerandaMenuOffcanvas />
                <BerandaMenu />

                {children}

                <BerandaFooter />
                <ScriptFooter />
                <Notifikasi />
            </div>
        </>
    );
};

export default LayoutBeranda;