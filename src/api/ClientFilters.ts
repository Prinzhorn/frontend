import { getDefaultStore } from "jotai";
import { orgAtom } from "../utils/dataAtoms";
import { AvailableCase } from "../models/AvailableCase";

type RequestContext = {
	url: string;
	method: string;
	headers: Headers;
	searchParams: URLSearchParams;
	routeParams: Record<string, string>;
	body: string | null;
};

export const employeeCasesFilter = (
	cases: AvailableCase[],
	ctx: RequestContext,
) => cases;

export const companyCasesFilter = (
	cases: AvailableCase[],
	ctx: RequestContext,
) => cases;
