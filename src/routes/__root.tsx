import {Root} from "betfinio_app/root"
import {createRootRoute} from "@tanstack/react-router";
import instance from "@/src/i18n.ts";


export const Route = createRootRoute({
	component: () => <Root id={'template'} instance={instance}/>,
})