import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    params: { locale: string };
};
export default function PortalLayout({ children, params }: Props) {

    return (
        <main>
            {children}
        </main>
    );
}
