const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/zip-BoDpD1Pf.js","assets/browser-bgcjPPYJ.js"])))=>i.map(i=>d[i]);
import{u as H,r as b,j as a,P as re,g as se,S as ae,N as F,K as ne,a0 as oe,_ as ie}from"./index-Dsh7tvXq.js";import{k as ce}from"./marked.esm-2VZVsGrn.js";import{T as S}from"./TableView-Dx49v5Fi.js";import{e as M,g as le}from"./copy-DSceLH5F.js";import{T as de}from"./Term-DzWLHghZ.js";import{r as y,w as _}from"./csv-DnhE45v3.js";import{d as k}from"./download-kWJTd1se.js";import{u as he}from"./title-DIfGoWTT.js";import{g as z,T as ue,t as W}from"./sectorManifest-pIecpmhL.js";import{T as me,U as pe,R as fe,V as ge,J as ye,A as C,E as be,z as we,W as O,v as R,w as B,H as ve,X as xe,g as Ce,f as Ee,Y as P,Z as D,b as je,_ as Se}from"./pageNotes-k0qchADR.js";import{c as E,u as _e,a as L}from"./SectorDataProvider-C3JFAG9R.js";import{s as T,p as ke,a as Te}from"./policy-fBhNFKoU.js";import"./index-C-BARvQh.js";import{H as Ie}from"./HeatTable-xlCTtPJO.js";import{S as j}from"./SectorChartCard-C2VtcPa2.js";import"./vocabulary-BjtNiyYI.js";import"./InfoTip-Z5Au3Xoi.js";import"./numeric-BgXiw7ds.js";import"./scale-mowK0ggO.js";import"./palette-CG_H2YCL.js";import"./legends-DI3SdPld.js";import"./questions-BW6ySdp_.js";import"./hooks-_Pari0cp.js";import"./store-BN1xm0i_.js";import"./contract-wFjSH5Fo.js";import"./PlotFigure-B-os5xLK.js";import"./theme-DtAjNJ9S.js";import"./codec-CWQenRRx.js";import"./ChartCard-DzHCzKgD.js";const Ne=`## What the Sector pages show\r
\r
The Sector pages show the measured data that the country rankings start from: who produces,\r
holds, trades, invests in and regulates each energy technology, along six supply-chain stages:\r
extraction (mining and fuels), refining (processed materials), components (parts), assembly (finished\r
equipment), deployment (installation and use) and recovery (recycling). Eleven technologies at six\r
stages make 66 sectors; Semiconductors are shown as well at their three trade stages (refining,\r
components and assembly), outside the headline set. Every number is shown in its source's own unit and\r
year, with the source, the coverage and the caveats beside it. Apart from the "What each country should do"\r
sections, which show the country strategy's recommendation at fixed thresholds, nothing\r
here is an index, a weight or a score, and nothing moves with the Perspective dials of the Country\r
profile.\r
\r
## Reading the colours\r
\r
Maps, tiles and heat tables use one three-colour scale: **orange** for the lower values, **white** for\r
the middle one (the median of the values shown), **blue** for the higher values. Colours follow the\r
rank among the values on screen, so a map of a very uneven measure still shows the differences between\r
the middle economies instead of painting almost everything one shade. For a measure that can be below\r
zero (a net balance, net trade, a change), white is zero: orange below, blue above. Hatching means there\r
is no value to colour; hover or open the table for the reason. Groups of economies keep their own\r
colours everywhere: China, the coalition core, the coalition partners and the rest of the world.\r
\r
The Country profiles rank and weigh; the Sector pages show the measured data those rankings start from.\r
\r
## Shares, world totals and concentration\r
\r
All shares, ranks and concentration statistics are computed within one measure, one source and one\r
year. Values from different sources or years are never added or compared on one axis.\r
\r
* **Share of world.** An economy's value divided by the world total of that measure. The world total\r
  comes from the source when it reports one (Energy Institute world rows, USGS world totals, the IEA's\r
  totals, the Red Book), or is the sum of every economy when the data cover them all (the reconciled\r
  Comtrade matrix, the Clean Investment Monitor). When a source lists only some economies, the share is\r
  called "of the economies listed by" that source, never a world share.\r
* **Not attributed.** The part of the world total that the source does not assign to a named economy\r
  (its "Rest of world" or "Other"). It is drawn as a hatched band and labelled.\r
* **Largest holder and top three.** The share of the largest holder, and the combined share of the\r
  three largest.\r
* **Concentration index (HHI).** The Herfindahl-Hirschman index: take each holder's share of the world\r
  total, square it and add up the squares. If one economy held everything, the index would be 1; ten\r
  equal holders give 0.10 and four give 0.25, so lower means more spread out. When more than 5% of the\r
  total is not attributed, the residual cannot be split, so the index is a lower bound and is written\r
  "at least" (for example "≥ 0.21").\r
* **Effective number.** One divided by the concentration index: the number of equal-sized holders\r
  that would give the same concentration. An index of 0.25 behaves like four equal holders, however many\r
  small ones there are.\r
* **Coalition share.** The combined share of the coalition's {members_n} members: {core_n} core members\r
  and {partner_n} partners. China, the coalition core, the coalition partners and the rest of the world\r
  always keep the same colours.\r
\r
Concentration is described, not graded: no thresholds are drawn on the charts and no colour means\r
"good" or "bad". The explainer on each Trade section quotes the thresholds competition authorities use\r
for mergers (for example "highly concentrated" above 0.18 in the 2023 US merger guidelines) as a\r
yardstick only: they were written for firms competing in one market, not for trade between whole\r
economies.\r
\r
## The EU as one bloc\r
\r
By default, the 27 EU members are shown as countries, as the sources report them. With "EU as one\r
bloc" switched on, the members become one row, "European Union (27)", counted in the coalition core:\r
\r
* additive measures (trade, investment, production, reserves, capacity, policy counts) are summed over\r
  the members;\r
* trade first removes the flows between EU members, using the bilateral data, so EU exports are the\r
  members' exports to non-members;\r
* when a source reports its own EU figure (the Energy Institute, the IEA's manufacturing entities, the\r
  Climate Action Tracker, the IEA policy database), that figure is used as reported;\r
* ratios, prices, wages, interest rates and technology readiness are not defined for the bloc and stay\r
  per member.\r
\r
{eu_outside_sentence}\r
\r
## Trade\r
\r
Every trade number on screen comes from one reconciled matrix of bilateral UN Comtrade flows: what the\r
importer declared (cost, insurance and freight), or, where the importer did not declare, what the\r
exporter reported multiplied by 1.06 (a "mirror" flow). Totals, shares, rankings, flows and the EU\r
bloc all sum this one matrix, so the cards on a page agree to the dollar.\r
\r
* **Technology attribution.** Each technology's trade is the trade of a basket of six-digit HS codes.\r
  Some codes belong to more than one technology, so trade is never added across technologies.\r
* **The other basis.** The country indices rank the exporters' own reports (free on board), which leave\r
  out economies that do not report and Hong Kong's re-exports. The reconciliation table below compares\r
  the two bases for every technology. Revealed comparative advantage is the one exporter-reported\r
  measure shown here, and it is labelled so.\r
* **Re-export hubs.** Hong Kong and Macao stay in the matrix, tagged "re-export hub"; importers record\r
  the country of origin, so their share there is small.\r
* **Baskets.** Each six-digit code sits at the stage of what it physically is: refined battery\r
  chemicals, polysilicon and electrical steel are refining, cells and blades components, modules and\r
  turbines assembly. Electric Grid's material baskets are copper and aluminium (ores at extraction,\r
  refined metal at refining); HS 851762 (communication equipment) is outside its manufacturing\r
  baskets. Excluded codes are listed with each technology's baskets.\r
* **Material baskets (2026-10 review).** Electric Vehicles, Solar, Wind, Nuclear and Semiconductors\r
  have material baskets: the battery minerals and magnet rare earths as ores and concentrates\r
  (Electric Vehicles, extraction) and as compounds and metals (refining), silicon metal (Solar,\r
  refining), rare-earth ore (Wind, extraction) and compounds and metals (refining), uranium ores\r
  (Nuclear, extraction) and natural uranium compounds (refining), and gallium, germanium and indium\r
  (Semiconductors, refining). Each profile states what its basket holds and leaves out.\r
* **Sub-components.** A basket is built from groups of codes, such as cells and modules in solar.\r
  Every Trade section can be viewed by sub-component: the exporter, net-trade and 2020-2024 cards and\r
  the ranking then show one group, on the same reconciled basis, so a sector's sub-components add up to\r
  its total. Bilateral flows stay whole-basket. A code shared with another sector counts in both, so\r
  sub-components are never added across sectors.\r
* **Export feasibility.** From the Harvard Atlas of Economic Complexity (2023): how much of the\r
  know-how a sector's products need an economy already shows in what it exports well (the Atlas's\r
  "relatedness", 1 minus its product-space "distance", averaged over the sector's four-digit headings).\r
  0 means none of the related capabilities are in place, 1 means all of them. It is a different source\r
  and year from the Comtrade matrix, so it has its own card; it describes capabilities, not costs,\r
  demand or policy, and it is not a forecast.\r
\r
## Cross-border manufacturing projects\r
\r
The components and assembly pages of Solar, Wind, Batteries and Electric Vehicles also show the\r
Cleantech Manufacturing FDI Dataset (CM-FDI) of the Net Zero Industrial Policy Lab, Johns Hopkins\r
University (P. Bandara and the Net Zero Industrial Policy Lab, edition 2026.10.05, licensed under\r
CC BY 4.0): one record per cross-border greenfield or expansion project, announced 1996-2026, with its\r
parent company, the economy where the parent is headquartered, the destination, the status and a\r
source link per field. A project makes parts and finished equipment alike, so both stages show the same\r
projects, and every sum counts a project once.\r
\r
* **What is counted.** Projects, and the capital a project announced where it is disclosed. An\r
  undisclosed amount reads "not disclosed"; it is never counted as 0, and every sum says how many\r
  projects it covers. A joint venture counts wholly under its listed parent in these counts.\r
* **Parent groups.** Investors are coloured by where the parent is headquartered: China (Hong Kong and\r
  Macao included), the coalition core, the coalition partners and the rest of the world.\r
* **Two bases.** "All" projects, or those "used by the indices": the manufacturing projects that are\r
  announced, under construction, completed or operational, without cancelled, paused or closed ones\r
  (the projects the partnership indices read). The share of a destination's projects\r
  with Chinese parents is shown as a raw share, not as the index component built from it.\r
* **Not a country total.** Domestic investment is not in CM-FDI.\r
\r
## Sector emissions\r
\r
The Climate section of each sector and the Policy & climate section of each Country profile show\r
Climate TRACE's estimates of direct emissions (tonnes of CO2-equivalent on a 100-year basis,\r
2021 to the latest complete year; Climate TRACE, climatetrace.org, CC BY 4.0).\r
\r
* **Mapped, with a match quality.** Climate TRACE reports subsectors (coal mining, oil and gas\r
  production, aluminium, electricity generation, ...), not technologies. Each sector says how well its\r
  subsectors match: *direct* (the subsector is the sector's own activity, as coal mining for Coal\r
  extraction), *partial* (it also covers other activity, or only part of the sector's: oil and gas\r
  production is one subsector; coal-fired power is part of coal use), *proxy* (a related activity shown\r
  for scale, not the sector's own emissions) or *none*. Sectors with no match show the technology's IPCC\r
  lifecycle intensity (grams of CO2e per kWh over a plant's life) instead, which is a property of the\r
  technology, not the sector's emissions.\r
* **Direct emissions only.** The electricity a smelter or factory buys is counted in power, not in its\r
  own sector.\r
* **Power by fuel** sums the plants Climate TRACE tracks, grouped by the first fuel each lists, so it is\r
  below a country's total for power.\r
* **Intensity** is the tracked assets' emissions over their activity (t CO2e per MWh, per tonne of\r
  steel, ...), counting only the assets that report an activity.\r
* **Materials as context.** Steel and aluminium are shown beside the manufacturing sectors whose products\r
  are made of them, labelled as context and never counted as those sectors' emissions.\r
* **Carried-forward years.** Where Climate TRACE's latest year repeats the year before (some mining\r
  subsectors in 2025), the section says so: the change is not a measured change.\r
\r
## Climate pathways (IEA scenarios)\r
\r
The Climate section of each sector also shows where the International Energy Agency's scenarios lead\r
for the World, and the Policy & climate section of each Country profile one line of world context. These\r
are **IEA scenario projections, not observed data and not forecasts**, and every figure says so.\r
\r
* **Source and licence.** IEA (2025), World Energy Outlook 2025 free dataset (World), CC BY-NC-SA 4.0\r
  (non-commercial use; adapted data shared under the same licence):\r
  the IEA's estimates for 2010, 2023 and 2024 and three scenarios for 2035, 2040 and 2050. *Stated\r
  Policies* reflects the policies in place and those announced with concrete detail; *Current Policies*\r
  only those already in force; *Net Zero Emissions by 2050* is the IEA's normative pathway to net zero\r
  energy-sector CO2 by 2050. The dataset has no 2030 values; lines join the published years.\r
* **World in the sectors, regions in the Country profiles.** The Sector pages use the World totals. The\r
  Country profiles use the same edition's Regions file (below); its regions have no Net Zero scenario.\r
* **Mapped, with a match quality.** Each sector shows the WEO series for its own activity (installed\r
  solar, wind, nuclear, geothermal and battery storage capacity; coal, oil and gas supply and use;\r
  coal-, gas- and oil-fired electricity), the demand it serves (the factories of the components and\r
  assembly stages and the minerals of extraction and refining: the deployment of the technology they\r
  supply) and emissions trajectories as context (the CO2\r
  intensity of electricity; CO2 from iron and steel, aluminium and chemicals beside the sectors made of\r
  them). *Direct*, *partial* and *proxy* mean what they mean for the emissions above. The free dataset\r
  has no EV stock, electrolyser capacity or grid length, so electricity used in transport stands in for\r
  the EV fleet, low-emissions hydrogen production (which also counts hydrogen from fossil fuels with\r
  carbon capture) for electrolysers, and electricity generation for the grid: each is labelled a proxy.\r
* **Mineral demand by scenario.** For the mineral sectors (extraction and refining), the IEA Critical Minerals Dataset 2026\r
  (CC BY 4.0) gives demand from the sector's technologies in the Current Policies, Stated Policies and\r
  High Demand scenarios, summed over the technologies named. That dataset has **no Net Zero scenario**,\r
  so mineral demand on the Net Zero pathway is not shown.\r
* **Vintage.** The pathways are checked against the previous edition (World Energy Outlook 2024) on the\r
  years both publish; the check is reported in the build, and only the 2025 edition is shown.\r
\r
## Climate sources (fossil CO2, transition indicators, regional pathways, investment)\r
\r
Added 2026-10-17. Each is cited wherever its figures are shown.\r
\r
* **Fossil CO2 by economy.** Global Carbon Project, Global Carbon Budget 2025 (Friedlingstein et al.,\r
  2025, *Earth System Science Data*, https://doi.org/10.5194/essd-2025-659); the publisher's terms make\r
  use conditional on that citation. *Territorial* emissions are the fossil CO2 emitted inside the economy\r
  (fossil fuels, cement, flaring; international aviation and shipping excluded). *Consumption-based*\r
  emissions (after Peters, Davis and Andrew, 2012, *Biogeosciences* 9) add the CO2 emitted abroad to make\r
  what it imports and subtract the CO2 in what it exports; the GCP publishes *transfers* as territorial\r
  minus consumption-based, so a net importer of embodied CO2 has negative transfers. Values in tonnes of\r
  carbon are converted to CO2 with the publisher's factor 3.664. From 1990; consumption-based to 2023.\r
* **World fossil CO2 by fuel.** The same budget's fossil emissions by fuel (coal, oil, gas, cement,\r
  flaring), shown beside the coal, oil and gas sectors as context: every use of the fuel, never the\r
  sector's own emissions.\r
* **Transition indicators.** Energy Institute, Statistical Review of World Energy 2025, Country\r
  Transition Tracker: energy-related greenhouse gas emissions, fossil fuel consumption, renewables' share\r
  of energy consumption, the power generation mix, the carbon intensity of energy and of GDP, and energy\r
  per person, for 79 economies (31 for the power mix). Each is shown against the *median economy*, the\r
  middle of the economies the tracker lists, not a world average. The low-carbon share of power adds the\r
  wind, solar, hydro, other renewables and nuclear shares.\r
* **Regional pathways.** IEA (2025), World Energy Outlook 2025 free dataset, Regions (CC BY-NC-SA 4.0):\r
  the IEA's estimates for 2010, 2023 and 2024 and the Stated Policies and Current Policies scenarios for\r
  2035 and 2050. Each Country profile names the region it shows: the economy's own (United States, Japan,\r
  China, India, Brazil, Russia), the European Union for its members, Southeast Asia for its members, the\r
  broader region whose IEA definition names the economy, or, for economies the IEA counts as "other", the\r
  region of their UN sub-region. A regional pathway is the region's, not the economy's. The IEA publishes\r
  its Net Zero scenario for the World only; the World line stays beside it as context. IEA scenario\r
  projections, not observed data.\r
* **2030 milestones.** IEA (2021), Net Zero by 2050, Annex A (CC BY-NC-SA 3.0 IGO): the 2021 roadmap's\r
  World values for 2030, shown beside the 2025 pathways of the same quantity and labelled as an older\r
  edition (the IEA has updated the scenario since). Where the 2021 row is narrower (unabated coal and gas\r
  only, passenger cars without vans, combustion CO2 only), the table marks it.\r
* **Energy investment.** IEA (2026), World Energy Investment 2026 (CC BY 4.0): investment by sector for the\r
  World, Advanced economies, China, emerging market and developing economies (excluding China) and seven\r
  regions, 2015-2026, in billions of 2025 US dollars at market exchange rates; 2026 values are IEA\r
  estimates. Each sector shows the investment in its own activity (solar, wind, nuclear, battery storage,\r
  electricity networks, coal, oil and gas supply, fossil power) or in the deployment it supplies, with\r
  the match quality: geothermal sits inside "other renewables" and the IEA's end-use transport spending\r
  (mostly electric vehicles) stands in for EVs, each labelled a proxy.\r
* **Not shown: manufacturing emissions per value added.** The IEA Energy and Emissions per Value Added\r
  database was staged, but its terms require the IEA's permission for any external dissemination, so the\r
  manufacturing sectors (components and assembly) do not show it and say why.\r
\r
## Money\r
\r
Comtrade trade is in current US dollars. Clean Investment Monitor investment is in billions of 2024\r
US dollars. CM-FDI capital is in millions of US dollars as announced (nominal). Nominal and real values\r
are never put on one chart or in one ratio.\r
\r
## Value states\r
\r
| State | Meaning |\r
|---|---|\r
| Observed | the source reports a value |\r
| Reported zero | the source reports 0 |\r
| Not reported separately | the value sits inside the source's "Rest of world"; it is not a zero. One exception: where no source reports an economy's production of a fuel separately (EI's "Other", no EIA value), production is assumed to be 0, so its net balance is minus its consumption and its self-sufficiency 0%. Those values are drawn like any other, marked † "Production not reported separately; assumed 0" |\r
| Listed without a figure | the source lists the economy but withholds the number, or reports it as under 1%; for a CM-FDI project, capital "not disclosed" |\r
| Mirror | built from partners' declarations |\r
| Estimate | flagged by the source (the Clean Investment Monitor's 2025 includes an estimated fourth quarter) |\r
| Base year zero | growth is not defined |\r
| Not covered | the economy is outside the source's coverage |\r
| Regional value | the value belongs to a region or entity, not to the country |\r
| Old | the latest observation is older than the measure allows |\r
\r
Maps hatch the states without a value; tables and tooltips say each state in words, and the "Source\r
note" column of every table carries the fact's own notes (an assumed-zero production, an EIA value).\r
\r
## What this module does not show, and why\r
\r
* **Index, weight and score values.** Rankings and weights belong to the Country profiles. Each measure's\r
  notes say which index it feeds, without showing the index. The one exception is what each\r
  country should do, a recommendation at fixed thresholds, shown in its own section.\r
* **Totals across technologies.** Trade baskets overlap, so a sum would count some goods twice.\r
* **The same figure twice.** Where a source reports one figure for manufacturing as a whole\r
  (manufacturing investment, the IEA's manufacturing shares, development aid), the components and\r
  assembly pages both show it, each with a note naming the other; headline sums count it once.\r
* **Regional or world values as country values.** World prices, IEA regions and entities, and\r
  technology readiness are shown at their own level and never ranked as if they were national.\r
* **Two trade bases on one page.** The matrix is shown; the exporter-reported basis appears only in the\r
  reconciliation table.\r
* **Area-integrated solar and wind potential as a ranking.** It ranks land area; it appears only in a\r
  scatter against resource quality.\r
* **Zero-fills as zeros.** Values a source does not report separately are marked as such; the one\r
  assumed zero (production no source reports, in the net balance) is drawn as a value and labelled.\r
* **Growth from zero or tiny bases.** Shown as "new" or "n/a".\r
* **Mixed units.** Manufacturing capacity is never summed across products; the six Energy Institute\r
  fuels are not shown as an energy mix.\r
* **Unverified units.** Where a unit could not be confirmed (the geothermal cost currency, the wind\r
  threshold, some commodity prices), the unit is labelled "unit to confirm".\r
* **Licensed data.** BNEF and BCG data are licensed and are not part of the public explorer.\r
* **Perspective dials.** The Country profile's dials do not apply here: measured data do not move with priorities.\r
`,Ae={obs:"observed",zero:"reported zero",nsr:"not reported separately (inside the source residual)",nq:"listed without a figure (withheld, or under 1% / not reported)",mirror:"from partners' declarations (exporter report x1.06)",est:"estimate flagged by the source (CIM 2025 includes estimated Q4)",na_growth:"base year zero (growth not defined)"},q="Licensed data (BNEF, BCG) are not part of the public explorer.";function V(r,n=r.vars){return n.map(e=>({var_id:e.id,theme:e.theme,family:e.family,label:e.label,unit:e.unit.long||e.unit.short,data_year:e.data_year,level:e.native_level,item_axis:e.item_axis,additive:e.agg,world_basis:e.world_basis,source:e.source.short,licence:e.licence,phase:e.phase,provenance:e.prov,caveats:r.caveatTexts(e).join(" | ")}))}function G(r,n){return[...r.sources.values()].filter(e=>!0).map(e=>({id:e.id,short:e.short,citation:e.citation,publisher:e.publisher,edition:e.edition,url:T(e.url),licence:e.licence,accessed:e.accessed,attribution:e.attribution,transform:e.transform,issues:e.issues}))}function K(r){const n=[];for(const e of r.items)for(const t of z){const i=r.coverage.get(`${e.idx}|${t}`);i&&n.push({item:e.slug,item_axis:e.axis,family:t,status:i.status,n_economies:i.n_geo,reason:i.reason,sources:i.sources.map(c=>r.sources.get(c)?.short??c).join("; ")})}return n}function $e(r,n,e,t=[]){const i=[...r.sources.values()].map(c=>`  - ${c.short}${c.edition?` (${c.edition})`:""}: ${c.citation}${c.licence==="attribution"&&c.attribution?` Attribution: ${c.attribution}`:""}`);return["Allied Industrial Base Explorer: Sectors, all sector data",`From: ${e}`,`Sector data bundle: ${n?.bundle_id??"unknown"} (export ${n?.created??"unknown"}${n?.git_commit?`, git ${n.git_commit.slice(0,10)}`:""})`,"","Measured values in each source’s own units and years. No index, weight or score values.","One CSV per measure family; columns: iso3c, economy, group, tier, eu_member, var_id, measure, item, year, value, unit, status, share_of_world, world_basis, rank, source, licence, note. NA is empty.",'note: the fact’s own notes, e.g. "Production not reported separately; assumed 0" (a net balance or self-sufficiency with status nsr and a value: the production no source reports separately counts as 0) or "EIA International Energy Statistics, 2024".',"dictionary.csv: every measure (unit, data year, level, source, licence, caveats). sources.csv: every source. coverage.csv: items x families.",...t,"","Status codes:",...Object.entries(Ae).map(([c,o])=>`  ${c}: ${o}`),"","Sources and licences (attribution required where stated):",...i,"",q,""].join(`\r
`)}function Me(r,n,e){const t=new Map,i=(o,u,s,l)=>{const d=r.items[u]??null;let h=t.get(o.family);h||t.set(o.family,h=[]);const f=l.world(o.idx,u,s);for(const p of l.rows(o.idx,u,s)){const w=r.geos[p.geo]??null;h.push({geo:w&&w.kind!=="residual"?w:null,economy:w&&w.kind==="residual"?w.name:void 0,v:o,item:d,year:p.obs_year??s,value:Number.isFinite(p.value)?p.value:null,status:p.status,share:f&&Number.isFinite(p.value)&&f.value>0?p.value/f.value:null,note:ge(r,o.id,p)})}};for(const o of r.vars){for(const u of n.itemsOf(o.idx))for(const s of n.yearsOf(o.idx,u))i(o,u,s,n);if(e)for(const u of e.itemsOf(o.idx))for(const s of e.yearsOf(o.idx,u))n.has(o.idx,u,s)||i(o,u,s,e)}const c={};for(const[o,u]of t)u.length&&(c[`${o}.csv`]=fe(r,u));return c}const We="cm-fdi-projects.csv: every cross-border clean-tech manufacturing project of the Cleantech Manufacturing FDI dataset (CM-FDI) as published, one row per project (CC BY 4.0; changes: project counts and sums of disclosed capital elsewhere in this explorer were computed by the Explorer's authors; no record altered).";function Oe(r,n,e,t,i,c=null){return{...Me(r,e,t),...c?.files??{},"dictionary.csv":y(V(r)),"sources.csv":y(G(r)),"coverage.csv":y(K(r)),"README.txt":$e(r,n,i,c?.readme??[])}}function Re(r,n,e){const t=ke(e);return y(Te(n).map(i=>({id:i.id,iso3c:r.geos[i.geo]?.code??null,jurisdiction:r.geos[i.geo]?.name??null,level:i.jurisdiction,title:t.get(i.id)?.title??null,url:T(t.get(i.id)?.url),year:i.year,status:i.status,type:i.type,tech_tags:i.tags.join("|"),stage_tags:i.stages.join("|"),tag_source:i.tech_src,cross_cutting:i.cross_cutting,source:"IEA Policies and Measures",licence:"attribution"})))}function Be(r,n){const e=r.varById.get("trade.flow"),t=[];for(const i of me(n))for(const c of[2020,2024]){const o=pe(n,i,c),u=o.reduce((s,l)=>s+l.v,0);for(const s of[...o].sort((l,d)=>d.v-l.v))t.push({exporter:r.geos[s.e]?.code,exporter_name:r.geos[s.e]?.name,importer:r.geos[s.i]?.code,importer_name:r.geos[s.i]?.name,var_id:"trade.flow",item:r.items[i]?.slug,year:c,value:s.v,unit:"USD",status:s.s==="mirror"?"mirror":"obs",share_of_world:u>0?s.v/u:null,source:e?.source.short??"UN Comtrade",licence:e?.licence??"open"})}return y(t)}function Pe(r){const n=r.countries.filter(o=>o.group==="core").length,e=r.countries.filter(o=>o.group==="partner").length,t=r.euOutsideCoalition,i=t.length?`${t.join(", ")} ${t.length===1?"is an EU member":"are EU members"} outside the coalition tiers; in bloc mode ${t.length===1?"its values count":"their values count"} in the core.`:"",c=Ne.replace(/\{members_n\}/g,String(n+e)).replace(/\{core_n\}/g,String(n)).replace(/\{partner_n\}/g,String(e)).replace(/\{eu_outside_sentence\}/g,i);return ce.parse(c,{async:!1,gfm:!0})}function De(){const r=E(),n=b.useMemo(()=>V(r),[r]);return a.jsx(j,{title:"Every measure: unit, years, source and caveats",vars:r.vars.slice(0,1).map(e=>({var:e.id})),caption:{sub:`${r.vars.length} measures in this data build: label, unit, data year, level, how it adds up, source, licence and caveats.`,badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"sector-dictionary",text:y(n)}),summary:`${n.length} measures.`,children:a.jsx(S,{rows:r.vars,caption:"Variable dictionary",search:!0,pageSize:20,rowKey:e=>e.id,cols:[{id:"l",header:"Measure",value:e=>e.label,minWidth:200},{id:"id",header:"Id",value:e=>e.id},{id:"u",header:"Unit",value:e=>e.unit.long||e.unit.short},{id:"y",header:"Data year",value:e=>e.data_year},{id:"lv",header:"Level",value:e=>e.native_level},{id:"a",header:"Adds up",value:e=>e.agg==="sum"?"sum":e.agg==="ratio"?"ratio of sums":"no"},{id:"s",header:"Source",value:e=>e.source.short},{id:"lc",header:"Licence",value:e=>e.licence},{id:"p",header:"Phase",value:e=>e.phase},{id:"c",header:"Caveats",value:e=>r.caveatTexts(e).join(" · ")||null,minWidth:240}]})})}function Ue(){const r=E(),n=[...r.sources.values()];return a.jsx(j,{title:"Every source: edition, licence and attribution",vars:r.vars.slice(0,1).map(e=>({var:e.id})),caption:{sub:`${n.length} sources, with how this export transforms each one and its known issues.`,badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"sector-sources",text:y(G(r))}),summary:`${n.length} sources.`,children:a.jsx(S,{rows:n,caption:"Sources",search:!0,pageSize:20,rowKey:e=>e.id,cols:[{id:"s",header:"Source",value:e=>e.short,minWidth:150},{id:"c",header:"Citation",value:e=>e.citation,minWidth:260},{id:"p",header:"Publisher",value:e=>e.publisher},{id:"e",header:"Edition",value:e=>e.edition},{id:"u",header:"Link",value:e=>T(e.url),cell:e=>{const t=T(e.url);return t?a.jsx(be,{href:t,children:new URL(t).hostname}):"–"}},{id:"l",header:"Licence",value:e=>e.licence==="attribution"?"open, attribution":e.licence},{id:"a",header:"Accessed",value:e=>e.accessed},{id:"at",header:"Attribution",value:e=>e.attribution,minWidth:200},{id:"t",header:"How the export handles it",value:e=>e.transform,minWidth:220},{id:"i",header:"Known issues",value:e=>e.issues,minWidth:200}]})})}const U={country:"✓",region:"◐",global:"○",licensed:"",none:"—"};function He(){const r=E(),n=z.filter(s=>s!=="development"&&[...r.coverage.values()].some(l=>l.family===s)),e=r.cells,t=b.useMemo(()=>{const s=new Map;for(const l of e){const d=l.techSlug??l.slug;let h=s.get(d);h||s.set(d,h={key:`tech:${d}`,label:l.tech??l.label,children:[]}),h.children.push({key:String(l.idx),label:l.stage??l.label})}return[...s.values()].flatMap(l=>l.children.map(d=>({key:d.key,label:`${l.label} — ${d.label}`})))},[e]),i=Math.max(1,...[...r.coverage.values()].map(s=>s.n_geo)),c=r.countries.filter(s=>s.group==="core"||s.group==="partner").sort((s,l)=>s.group===l.group?s.name.localeCompare(l.name,"en"):s.group==="core"?-1:1),o=b.useMemo(()=>{const s=new Map;for(const h of r.vars)h.roster&&r.rosters.has(h.roster)&&!s.has(h.roster)&&s.set(h.roster,h.source.short);const l=[...s.entries()].map(([h,f])=>({roster:h,label:f})),d=new Set(l.map(h=>h.label).filter((h,f,p)=>p.indexOf(h)!==f));return l.map(h=>({...h,label:d.has(h.label)?`${h.label} (${h.roster.replace(/_/g," ")})`:h.label}))},[r]),u=o.map(s=>({c:s,miss:c.filter(l=>!r.rosters.get(s.roster)?.has(l.idx))})).filter(s=>s.miss.length>0&&s.miss.length<c.length);return a.jsxs("div",{className:"space-y-6",children:[a.jsx(j,{title:"Coverage by sector and measure family",vars:r.vars.slice(0,1).map(s=>({var:s.id})),caption:{sub:"✓ country data · ◐ region or entity data · ○ a global value only · — not available. Shaded by the number of economies with data.",badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"sector-coverage",text:y(K(r))}),summary:`Coverage of ${e.length} sectors across ${n.length} measure families.`,children:a.jsx(Ie,{rows:t,cols:n.map(s=>({key:s,label:r.families.get(s)?.label??s})),rowHeader:"Sector",caption:"Coverage: sectors by measure family",domain:[0,i],cell:(s,l)=>{const d=r.coverage.get(`${s}|${l}`);return!d||d.status==="none"||d.status==="licensed"?{value:null,display:d?.status==="licensed"?"licensed":U.none,title:d?d.status==="licensed"?"Licensed: not in this build":le(d.reason):"No data"}:{value:d.n_geo,display:`${U[d.status]} ${d.status==="country"?d.n_geo:""}`.trim(),title:`${d.status==="country"?`${d.n_geo} economies`:d.status==="region"?`${d.n_geo} regions or entities`:"a global value"}${d.sources.length?`; ${d.sources.map(h=>r.sources.get(h)?.short??h).join(", ")}`:""}`}}})}),a.jsx(j,{title:"Which sources cover the coalition members",vars:r.vars.slice(0,1).map(s=>({var:s.id})),caption:{sub:`The coalition's ${c.length} members against each source's coverage (✓ covered, — not covered).`,badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"coalition-coverage",text:y(c.map(s=>({iso3c:s.code,economy:s.name,tier:s.tier,...Object.fromEntries(o.map(l=>[l.roster,r.rosters.get(l.roster)?.has(s.idx)?1:0]))})))}),notes:u.length?a.jsx("ul",{className:"list-disc space-y-0.5 pl-5",children:u.map(s=>a.jsxs("li",{children:[s.c.label," does not cover ",we(s.miss.map(l=>l.name)),"."]},s.c.roster))}):void 0,summary:`${c.length} coalition members against ${o.length} source rosters.`,children:a.jsx(S,{rows:c,caption:"Coalition members by source",search:!0,pageSize:20,rowKey:s=>s.code,cols:[{id:"e",header:"Member",value:s=>s.name,minWidth:140},{id:"t",header:"Tier",value:s=>s.group==="core"?"core":"partner"},...o.map(s=>({id:s.roster,header:s.label,value:l=>r.rosters.get(s.roster)?.has(l.idx)?"✓":"—",title:s.roster}))]})})]})}function Fe(){const r=E(),n=[...r.reconcile].sort((t,i)=>(r.items[t.item]?.sort??0)-(r.items[i.item]?.sort??0)||i.year-t.year);if(!n.length)return a.jsx("p",{className:"text-sm text-paper-mute",children:"No reconciliation rows in this build."});const e=n.filter(t=>t.warn).length;return a.jsx(j,{title:"Trade basis: the matrix and the exporters' reports",vars:[{var:"trade.exports"},{var:"trade.rca"}],subExtra:a.jsx(ve,{children:"Each row compares one sector and year on two bases: the reconciled matrix this module shows (what importers declare, and partners' reports where an importer is silent) and the exporters' own reports. Close numbers mean the choice of basis does not change the story; WARN marks rows where China's share differs by more than 3 points."}),caption:{coverage:`${n.length} sector-years; ${e} marked WARN (China's shares differ by more than 3 points).`},csv:()=>({name:"trade-basis-reconciliation",text:y(n.map(t=>({item:r.items[t.item]?.slug,year:t.year,matrix_total_usd:t.matrix_total,reported_total_usd:t.reported_total,matrix_china_share:t.matrix_china,reported_china_share:t.reported_china,matrix_hhi:t.matrix_hhi,reported_hhi:t.reported_hhi,n_reporters:t.n_reporters,warn:t.warn})))}),notes:a.jsxs("p",{children:["The gap has three reasons: importers declare cost, insurance and freight while exporters declare free on board; economies that do not report are seen in the matrix through their partners; Hong Kong's re-exports are out of the exporter-reported basis. The country indices rank the exporter-reported ",a.jsx(de,{id:"hhi",children:"concentration index (HHI)"}),"."]}),summary:`${n.length} sector-years compared; ${e} differ in China's share by more than 3 points.`,children:a.jsx(S,{rows:n,caption:"Trade-basis reconciliation",pageSize:30,rowKey:t=>`${t.item}|${t.year}`,cols:[{id:"c",header:"Sector",value:t=>r.items[t.item]?r.cellLabel(r.items[t.item]):"",minWidth:170},{id:"y",header:"Year",value:t=>t.year,num:!0},{id:"mt",header:"Matrix total",value:t=>t.matrix_total,cell:t=>O(t.matrix_total,"table"),num:!0},{id:"rt",header:"Exporter-reported total",value:t=>t.reported_total,cell:t=>O(t.reported_total,"table"),num:!0},{id:"mc",header:"China (matrix)",value:t=>t.matrix_china,cell:t=>R(t.matrix_china),num:!0},{id:"rc",header:"China (reported)",value:t=>t.reported_china,cell:t=>R(t.reported_china),num:!0},{id:"mh",header:"Concentration (HHI), matrix",value:t=>t.matrix_hhi,cell:t=>B(t.matrix_hhi),num:!0},{id:"rh",header:"Concentration (HHI), reported",value:t=>t.reported_hhi,cell:t=>B(t.reported_hhi),num:!0},{id:"n",header:"Reporters",value:t=>t.n_reporters,num:!0},{id:"w",header:"Check",value:t=>t.warn?"WARN":"ok",cell:t=>t.warn?a.jsx("span",{className:"tag",style:{borderColor:"var(--color-signal)",color:"var(--color-paper)"},children:"WARN"}):"ok"}]})})}function ze(){const r=E(),n=_e(),e=L(),t=H(),i=(e.data?.chunks??[]).filter(m=>m.name.startsWith("sector-trade-")).map(m=>m.name.slice(13)),[c,o]=b.useState(null),u=c&&i.includes(c)?c:i[0]??null,[s,l]=b.useState(null),[d,h]=b.useState(null),f=(m,g)=>async()=>{l(m),h(null);try{await g()}catch(v){h(v instanceof Error?v.message:String(v))}finally{l(null)}},p=m=>{const g=n.chunkBytes(m);return g?` (${Ee(g)} to load)`:""},w=f("all",async()=>{const m=await n.load("sector-facts"),g=e.data?.chunks.some(x=>x.name==="sector-series")?await n.load("sector-series"):null,v=e.data?.chunks.some(x=>x.name==="sector-fdi")?await n.load("sector-fdi"):null,N=v?P(v):null,Q=N?{files:{"cm-fdi-projects.csv":D(r,N,N.projects)},readme:[We]}:null,X=Oe(r,e.data,je(m),g?Se(g):null,`${window.location.origin}${t.pathname}`,Q),ee=Object.fromEntries(Object.entries(X).map(([x,$])=>[x,x.endsWith(".csv")?_($):$])),{zipTexts:te}=await ie(async()=>{const{zipTexts:x}=await import("./zip-BoDpD1Pf.js");return{zipTexts:x}},__vite__mapDeps([0,1]));k(new Blob([te(ee)],{type:"application/zip"}),"sector-data.zip")}),Y=f("flows",async()=>{if(!u)return;const m=await n.load(W(u));k(new Blob([_(Be(r,m))],{type:"text/csv;charset=utf-8"}),`trade-flows-${u}.csv`)}),A=!!e.data?.chunks.some(m=>m.name==="sector-fdi"),I=xe(r),Z=f("fdi",async()=>{const m=await n.load("sector-fdi"),g=P(m);k(new Blob([_(D(r,g,g.projects))],{type:"text/csv;charset=utf-8"}),"cm-fdi-projects.csv")}),J=f("policy",async()=>{const m=await n.load("sector-policy"),g=e.data?.chunks.some(v=>v.name==="sector-policy-text")?await n.load("sector-policy-text"):null;k(new Blob([_(Re(r,m,g))],{type:"text/csv;charset=utf-8"}),"policy-list.csv")});return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("ul",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[a.jsxs("li",{className:"card flex flex-col p-5",children:[a.jsx("h3",{className:"text-base font-medium text-paper",children:"All sector data (.zip)"}),a.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["One CSV per measure family, dictionary.csv, sources.csv, coverage.csv",A?", the CM-FDI projects":""," and a README with citations, licences, the vintage and the status codes.",p("sector-facts")]}),a.jsx("button",{type:"button",className:"btn btn-ghost btn-sm mt-3 self-start",disabled:s!==null,onClick:w,children:s==="all"?"Preparing…":"Download all sector data"})]}),a.jsxs("li",{className:"card flex flex-col p-5",children:[a.jsx("h3",{className:"text-base font-medium text-paper",children:"Trade flows for one technology (.csv)"}),a.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["Every bilateral flow of the technology's sectors, 2020 and 2024, from the reconciled matrix.",u?p(W(u)):""]}),i.length>0?a.jsxs("div",{className:"mt-3 flex flex-wrap items-end gap-2",children:[a.jsx(ae,{label:"Technology",value:u??"",options:i.map(m=>({value:m,label:ue[m]})),onChange:m=>o(m),className:"min-w-[10rem]"}),a.jsx("button",{type:"button",className:"btn btn-ghost btn-sm",disabled:s!==null||!u,onClick:Y,children:s==="flows"?"Preparing…":"Download flows"})]}):a.jsx("p",{className:"mt-3 text-sm text-paper-mute",children:"No trade data in this build."})]}),a.jsxs("li",{className:"card flex flex-col p-5",children:[a.jsx("h3",{className:"text-base font-medium text-paper",children:"Policy list (.csv)"}),a.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["Every IEA Policies and Measures record with its year, status, type, technology and stage tags, title and IEA link (attribution: IEA).",p("sector-policy")]}),a.jsx("button",{type:"button",className:"btn btn-ghost btn-sm mt-3 self-start",disabled:s!==null||!e.data?.chunks.some(m=>m.name==="sector-policy"),onClick:J,children:s==="policy"?"Preparing…":"Download the policy list"})]}),A&&a.jsxs("li",{className:"card flex flex-col p-5",children:[a.jsx("h3",{className:"text-base font-medium text-paper",children:"Factory projects (CM-FDI), every cross-border project (.csv)"}),a.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["Every project of the Cleantech Manufacturing FDI Dataset",I?.edition?` (edition ${I.edition})`:"",': parent, headquarters, destination, status, years, capital investment (or "not disclosed"), joint venture and the source links per field. Licensed CC BY 4.0: cite as ',I?.citation??"the dataset’s site specifies",".",p("sector-fdi")]}),a.jsx("button",{type:"button",className:"btn btn-ghost btn-sm mt-3 self-start",disabled:s!==null,onClick:Z,children:s==="fdi"?"Preparing…":"Download the projects"})]})]}),d&&a.jsx(F,{kind:"error",title:"The download could not be prepared",children:d}),a.jsx("p",{className:"text-sm text-paper-mute",children:q})]})}function Le(){const r=oe(),[n,e]=b.useState(void 0);return b.useEffect(()=>{if(r.strategic)return;let t=!0;const i="/aib-explorer/",c=typeof window<"u"?window.location.origin:"";return fetch(`${c}${i}data/manifest.json`,{cache:"no-cache"}).then(o=>o.ok?o.json():null).then(o=>{t&&e(o&&typeof o=="object"&&typeof o.bundle_id=="string"?o.bundle_id:null)}).catch(()=>t&&e(null)),()=>{t=!1}},[r.strategic]),r.strategic?r.strategic.bundle_id:n}function qe(){const r=L(),n=Le(),e=r.data;if(!e)return null;const t=e.strategic_bundle_id&&n?e.strategic_bundle_id===n:null,i=e.validation.filter(o=>o.status==="PASS").length,c=e.validation.filter(o=>o.status==="WARN");return a.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[a.jsxs("section",{className:"card p-5","aria-labelledby":"build-card-h",children:[a.jsx("h3",{id:"build-card-h",className:"rule-neis-sm mb-3 text-base font-medium text-paper",children:"This data build"}),a.jsx(ne,{rows:[["Exported",Ce(e.created)],["Git commit",e.git_commit?e.git_commit.slice(0,10):"–"],["Sector bundle",e.bundle_id.slice(0,12)],["Strategic bundle it was built against",e.strategic_bundle_id?e.strategic_bundle_id.slice(0,12):"–"],["Generator",e.generator],["Pipeline marker",e.pipeline_marker??"–"]]}),a.jsxs("div",{className:"mt-3",children:[t===!0&&a.jsx("p",{className:"text-sm text-paper-dim",children:"✓ Built from the same pipeline run as the Strategic data."}),t===!1&&a.jsxs(F,{kind:"warning",children:["Built from a different run than the Strategic data loaded here (",String(n).slice(0,12),")."]}),t===null&&a.jsx("p",{className:"text-sm text-paper-mute",children:n===void 0?"Checking the Strategic data…":"The Strategic data could not be checked."})]})]}),a.jsxs("section",{className:"card p-5","aria-labelledby":"valid-h",children:[a.jsx("h3",{id:"valid-h",className:"rule-neis-sm mb-3 text-base font-medium text-paper",children:"Validation"}),a.jsxs("p",{className:"text-sm text-paper-dim",children:[i," checks passed",c.length?`; ${c.length} warnings`:"","."]}),c.length>0&&a.jsx("ul",{className:"mt-2 list-disc space-y-1 pl-5 text-sm text-paper-dim",children:c.map(o=>a.jsxs("li",{children:[a.jsx("span",{className:"text-paper",children:o.check})," (",o.n,")",o.detail?`: ${o.detail}`:""]},o.check))})]}),a.jsxs("section",{className:"card p-5 lg:col-span-2","aria-labelledby":"inputs-h",children:[a.jsx("h3",{id:"inputs-h",className:"rule-neis-sm mb-3 text-base font-medium text-paper",children:"Input files"}),a.jsx(S,{rows:e.sources,caption:"Input files",search:!0,pageSize:15,rowKey:o=>o.path,cols:[{id:"p",header:"Path",value:o=>o.path,minWidth:260},{id:"m",header:"Modified",value:o=>o.mtime},{id:"b",header:"Bytes",value:o=>o.bytes,num:!0},{id:"h",header:"MD5",value:o=>o.md5.slice(0,12),title:"first 12 characters"}]})]})]})}function xt(){const r=E(),n=H();he("Sources & data","Sector Insights");const e=b.useMemo(()=>Pe(r),[r]);return ye(n.hash,!0),a.jsxs("div",{className:"space-y-10",children:[a.jsx(re,{eyebrow:"SECTORS · SOURCES",title:M.title,lede:M.lede}),a.jsxs(C,{id:"about",title:"About the Sector pages",children:[a.jsx("article",{className:"prose-neis max-w-4xl",dangerouslySetInnerHTML:{__html:e}}),a.jsx("p",{className:"mt-4 text-sm",children:a.jsx(se,{className:"link",to:"/glossary",children:"Glossary: every term used in the three modules, in plain words →"})})]}),a.jsx(C,{id:"dictionary",title:"Variable dictionary",children:a.jsx(De,{})}),a.jsx(C,{id:"sources",title:"Sources",children:a.jsx(Ue,{})}),a.jsx(C,{id:"coverage",title:"Coverage",children:a.jsx(He,{})}),a.jsx(C,{id:"reconciliation",title:"Trade basis",children:a.jsx(Fe,{})}),a.jsx(C,{id:"downloads",title:"Downloads",children:a.jsx(ze,{})}),a.jsx(C,{id:"build",title:"Build",children:a.jsx(qe,{})})]})}export{Pe as aboutHtml,xt as default};
//# sourceMappingURL=SourcesView-Bo_m9TI7.js.map
