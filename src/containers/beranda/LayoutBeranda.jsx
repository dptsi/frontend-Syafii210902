import BerandaFooter from "../components/BerandaFooter";
import ScriptFooter from "../components/ScriptFooter";
import BerandaMeta from "../components/BerandaMeta";
import BerandaHeader from "../components/BerandaHeader";
import BerandaMenuOffcanvasGeneral from "../components/BerandaMenuOffcanvasGeneral";
import BerandaMenuGeneral from "../components/BerandaMenuGeneral";
import Notifikasi from "../components/Notifikasi";

const LayoutBeranda = ({ children }) => {
    return (
        <>
            <BerandaMeta />
            <div className="mn-ht-100v d-flex flex-column" id="content-inner-wrapper">
                <BerandaHeader />
                <BerandaMenuOffcanvasGeneral />
                <BerandaMenuGeneral />

                {children}

                <BerandaFooter />
                <ScriptFooter />
                <Notifikasi />
            </div>
        </>
    );
};

export default LayoutBeranda;