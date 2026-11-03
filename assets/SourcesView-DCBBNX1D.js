const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/zip-BoDpD1Pf.js","assets/browser-bgcjPPYJ.js"])))=>i.map(i=>d[i]);
import{u as H,r as b,j as n,P as se,g as ae,S as ne,N as F,K as oe,a0 as re,_ as ie}from"./index-PazsPFQ8.js";import{k as ce}from"./marked.esm-2VZVsGrn.js";import{T as S}from"./TableView-Bnczvmgq.js";import{e as M,g as le}from"./copy-cPC6LDlG.js";import{T as de}from"./Term-yMYLblpV.js";import{r as y,w as _}from"./csv-DnhE45v3.js";import{d as k}from"./download-kWJTd1se.js";import{u as he}from"./title-LUFbtHI-.js";import{g as z,T as ue,t as W}from"./sectorManifest-Dumoy_la.js";import{T as me,U as pe,R as fe,V as ge,J as ye,A as C,E as be,z as we,W as O,v as R,w as B,H as ve,X as xe,g as Ce,f as Ee,Y as P,Z as D,b as je,_ as Se}from"./pageNotes-DcC50dT2.js";import{c as E,u as _e,a as L}from"./SectorDataProvider-B5VLfTjl.js";import{s as T,p as ke,a as Te}from"./policy-SpvNZepF.js";import"./index-C-BARvQh.js";import{H as Ie}from"./HeatTable-D2FRnQWF.js";import{S as j}from"./SectorChartCard-CNYWdj19.js";import"./vocabulary-Dya6lZU2.js";import"./InfoTip-DU_QkvhE.js";import"./numeric-BgXiw7ds.js";import"./scale-mowK0ggO.js";import"./palette-CG_H2YCL.js";import"./legends-DTpJzFxh.js";import"./questions-28Mukq-n.js";import"./hooks-D9CLmy73.js";import"./store-BALWb7Ah.js";import"./contract-D4M_ePyc.js";import"./PlotFigure-DPMcb2Sz.js";import"./theme-DtAjNJ9S.js";import"./codec-CWQenRRx.js";import"./ChartCard-CkzOjlKU.js";const Ne=`## What the Sector pages show

The Sector pages show the measured data that the country rankings start from: who produces,
holds, trades, invests in and regulates each energy technology, along six supply-chain stages:
extraction (mining and fuels), refining (processed materials), components (parts), assembly (finished
equipment), deployment (installation and use) and recovery (recycling). Eleven technologies at six
stages make 66 sectors; Semiconductors are shown as well at their three trade stages (refining,
components and assembly), outside the headline set. Every number is shown in its source's own unit and
year, with the source, the coverage and the caveats beside it. Apart from the "What each country should do"
sections, which show the country strategy's recommendation at fixed thresholds, nothing
here is an index, a weight or a score, and nothing moves with the Perspective dials of the Country
profile.

## Reading the colours

Maps, tiles and heat tables use one three-colour scale: **orange** for the lower values, **white** for
the middle one (the median of the values shown), **blue** for the higher values. Colours follow the
rank among the values on screen, so a map of a very uneven measure still shows the differences between
the middle economies instead of painting almost everything one shade. For a measure that can be below
zero (a net balance, net trade, a change), white is zero: orange below, blue above. Hatching means there
is no value to colour; hover or open the table for the reason. Groups of economies keep their own
colours everywhere: China, the coalition core, the coalition partners and the rest of the world.

The Country profiles rank and weigh; the Sector pages show the measured data those rankings start from.

## Shares, world totals and concentration

All shares, ranks and concentration statistics are computed within one measure, one source and one
year. Values from different sources or years are never added or compared on one axis.

* **Share of world.** An economy's value divided by the world total of that measure. The world total
  comes from the source when it reports one (Energy Institute world rows, USGS world totals, the IEA's
  totals, the Red Book), or is the sum of every economy when the data cover them all (the reconciled
  Comtrade matrix, the Clean Investment Monitor). When a source lists only some economies, the share is
  called "of the economies listed by" that source, never a world share.
* **Not attributed.** The part of the world total that the source does not assign to a named economy
  (its "Rest of world" or "Other"). It is drawn as a hatched band and labelled.
* **Largest holder and top three.** The share of the largest holder, and the combined share of the
  three largest.
* **Concentration index (HHI).** The Herfindahl-Hirschman index: take each holder's share of the world
  total, square it and add up the squares. If one economy held everything, the index would be 1; ten
  equal holders give 0.10 and four give 0.25, so lower means more spread out. When more than 5% of the
  total is not attributed, the residual cannot be split, so the index is a lower bound and is written
  "at least" (for example "≥ 0.21").
* **Effective number.** One divided by the concentration index: the number of equal-sized holders
  that would give the same concentration. An index of 0.25 behaves like four equal holders, however many
  small ones there are.
* **Coalition share.** The combined share of the coalition's {members_n} members: {core_n} core members
  and {partner_n} partners. China, the coalition core, the coalition partners and the rest of the world
  always keep the same colours.

Concentration is described, not graded: no thresholds are drawn on the charts and no colour means
"good" or "bad". The explainer on each Trade section quotes the thresholds competition authorities use
for mergers (for example "highly concentrated" above 0.18 in the 2023 US merger guidelines) as a
yardstick only: they were written for firms competing in one market, not for trade between whole
economies.

## The EU as one bloc

By default, the 27 EU members are shown as countries, as the sources report them. With "EU as one
bloc" switched on, the members become one row, "European Union (27)", counted in the coalition core:

* additive measures (trade, investment, production, reserves, capacity, policy counts) are summed over
  the members;
* trade first removes the flows between EU members, using the bilateral data, so EU exports are the
  members' exports to non-members;
* when a source reports its own EU figure (the Energy Institute, the IEA's manufacturing entities, the
  Climate Action Tracker, the IEA policy database), that figure is used as reported;
* ratios, prices, wages, interest rates and technology readiness are not defined for the bloc and stay
  per member.

{eu_outside_sentence}

## Trade

Every trade number on screen comes from one reconciled matrix of bilateral UN Comtrade flows: what the
importer declared (cost, insurance and freight), or, where the importer did not declare, what the
exporter reported multiplied by 1.06 (a "mirror" flow). Totals, shares, rankings, flows and the EU
bloc all sum this one matrix, so the cards on a page agree to the dollar.

* **Technology attribution.** Each technology's trade is the trade of a basket of six-digit HS codes.
  Some codes belong to more than one technology, so trade is never added across technologies.
* **The other basis.** The country indices rank the exporters' own reports (free on board), which leave
  out economies that do not report and Hong Kong's re-exports. The reconciliation table below compares
  the two bases for every technology. Revealed comparative advantage is the one exporter-reported
  measure shown here, and it is labelled so.
* **Re-export hubs.** Hong Kong and Macao stay in the matrix, tagged "re-export hub"; importers record
  the country of origin, so their share there is small.
* **Baskets.** Each six-digit code sits at the stage of what it physically is: refined battery
  chemicals, polysilicon and electrical steel are refining, cells and blades components, modules and
  turbines assembly. Electric Grid's material baskets are copper and aluminium (ores at extraction,
  refined metal at refining); HS 851762 (communication equipment) is outside its manufacturing
  baskets. Excluded codes are listed with each technology's baskets.
* **Material baskets (2026-10 review).** Electric Vehicles, Solar, Wind, Nuclear and Semiconductors
  have material baskets: the battery minerals and magnet rare earths as ores and concentrates
  (Electric Vehicles, extraction) and as compounds and metals (refining), silicon metal (Solar,
  refining), rare-earth ore (Wind, extraction) and compounds and metals (refining), uranium ores
  (Nuclear, extraction) and natural uranium compounds (refining), and gallium, germanium and indium
  (Semiconductors, refining). Each profile states what its basket holds and leaves out.
* **Sub-components.** A basket is built from groups of codes, such as cells and modules in solar.
  Every Trade section can be viewed by sub-component: the exporter, net-trade and 2020-2024 cards and
  the ranking then show one group, on the same reconciled basis, so a sector's sub-components add up to
  its total. Bilateral flows stay whole-basket. A code shared with another sector counts in both, so
  sub-components are never added across sectors.
* **Export feasibility.** From the Harvard Atlas of Economic Complexity (2023): how much of the
  know-how a sector's products need an economy already shows in what it exports well (the Atlas's
  "relatedness", 1 minus its product-space "distance", averaged over the sector's four-digit headings).
  0 means none of the related capabilities are in place, 1 means all of them. It is a different source
  and year from the Comtrade matrix, so it has its own card; it describes capabilities, not costs,
  demand or policy, and it is not a forecast.

## Cross-border manufacturing projects

The components and assembly pages of Solar, Wind, Batteries and Electric Vehicles also show the
Cleantech Manufacturing FDI Dataset (CM-FDI) of the Net Zero Industrial Policy Lab, Johns Hopkins
University (P. Bandara and the Net Zero Industrial Policy Lab, edition 2026.10.05, licensed under
CC BY 4.0): one record per cross-border greenfield or expansion project, announced 1996-2026, with its
parent company, the economy where the parent is headquartered, the destination, the status and a
source link per field. A project makes parts and finished equipment alike, so both stages show the same
projects, and every sum counts a project once.

* **What is counted.** Projects, and the capital a project announced where it is disclosed. An
  undisclosed amount reads "not disclosed"; it is never counted as 0, and every sum says how many
  projects it covers. A joint venture counts wholly under its listed parent in these counts.
* **Parent groups.** Investors are coloured by where the parent is headquartered: China (Hong Kong and
  Macao included), the coalition core, the coalition partners and the rest of the world.
* **Two bases.** "All" projects, or those "used by the indices": the manufacturing projects that are
  announced, under construction, completed or operational, without cancelled, paused or closed ones
  (the projects the partnership indices read). The share of a destination's projects
  with Chinese parents is shown as a raw share, not as the index component built from it.
* **Not a country total.** Domestic investment is not in CM-FDI.

## Sector emissions

The Climate section of each sector and the Policy & climate section of each Country profile show
Climate TRACE's estimates of direct emissions (tonnes of CO2-equivalent on a 100-year basis,
2021 to the latest complete year; Climate TRACE, climatetrace.org, CC BY 4.0).

* **Mapped, with a match quality.** Climate TRACE reports subsectors (coal mining, oil and gas
  production, aluminium, electricity generation, ...), not technologies. Each sector says how well its
  subsectors match: *direct* (the subsector is the sector's own activity, as coal mining for Coal
  extraction), *partial* (it also covers other activity, or only part of the sector's: oil and gas
  production is one subsector; coal-fired power is part of coal use), *proxy* (a related activity shown
  for scale, not the sector's own emissions) or *none*. Sectors with no match show the technology's IPCC
  lifecycle intensity (grams of CO2e per kWh over a plant's life) instead, which is a property of the
  technology, not the sector's emissions.
* **Direct emissions only.** The electricity a smelter or factory buys is counted in power, not in its
  own sector.
* **Power by fuel** sums the plants Climate TRACE tracks, grouped by the first fuel each lists, so it is
  below a country's total for power.
* **Intensity** is the tracked assets' emissions over their activity (t CO2e per MWh, per tonne of
  steel, ...), counting only the assets that report an activity.
* **Materials as context.** Steel and aluminium are shown beside the manufacturing sectors whose products
  are made of them, labelled as context and never counted as those sectors' emissions.
* **Carried-forward years.** Where Climate TRACE's latest year repeats the year before (some mining
  subsectors in 2025), the section says so: the change is not a measured change.

## Climate pathways (IEA scenarios)

The Climate section of each sector also shows where the International Energy Agency's scenarios lead
for the World, and the Policy & climate section of each Country profile one line of world context. These
are **IEA scenario projections, not observed data and not forecasts**, and every figure says so.

* **Source and licence.** IEA (2025), World Energy Outlook 2025 free dataset (World), CC BY-NC-SA 4.0
  (non-commercial use; adapted data shared under the same licence):
  the IEA's estimates for 2010, 2023 and 2024 and three scenarios for 2035, 2040 and 2050. *Stated
  Policies* reflects the policies in place and those announced with concrete detail; *Current Policies*
  only those already in force; *Net Zero Emissions by 2050* is the IEA's normative pathway to net zero
  energy-sector CO2 by 2050. The dataset has no 2030 values; lines join the published years.
* **World in the sectors, regions in the Country profiles.** The Sector pages use the World totals. The
  Country profiles use the same edition's Regions file (below); its regions have no Net Zero scenario.
* **Mapped, with a match quality.** Each sector shows the WEO series for its own activity (installed
  solar, wind, nuclear, geothermal and battery storage capacity; coal, oil and gas supply and use;
  coal-, gas- and oil-fired electricity), the demand it serves (the factories of the components and
  assembly stages and the minerals of extraction and refining: the deployment of the technology they
  supply) and emissions trajectories as context (the CO2
  intensity of electricity; CO2 from iron and steel, aluminium and chemicals beside the sectors made of
  them). *Direct*, *partial* and *proxy* mean what they mean for the emissions above. The free dataset
  has no EV stock, electrolyser capacity or grid length, so electricity used in transport stands in for
  the EV fleet, low-emissions hydrogen production (which also counts hydrogen from fossil fuels with
  carbon capture) for electrolysers, and electricity generation for the grid: each is labelled a proxy.
* **Mineral demand by scenario.** For the mineral sectors (extraction and refining), the IEA Critical Minerals Dataset 2026
  (CC BY 4.0) gives demand from the sector's technologies in the Current Policies, Stated Policies and
  High Demand scenarios, summed over the technologies named. That dataset has **no Net Zero scenario**,
  so mineral demand on the Net Zero pathway is not shown.
* **Vintage.** The pathways are checked against the previous edition (World Energy Outlook 2024) on the
  years both publish; the check is reported in the build, and only the 2025 edition is shown.

## Climate sources (fossil CO2, transition indicators, regional pathways, investment)

Added 2026-10-17. Each is cited wherever its figures are shown.

* **Fossil CO2 by economy.** Global Carbon Project, Global Carbon Budget 2025 (Friedlingstein et al.,
  2025, *Earth System Science Data*, https://doi.org/10.5194/essd-2025-659); the publisher's terms make
  use conditional on that citation. *Territorial* emissions are the fossil CO2 emitted inside the economy
  (fossil fuels, cement, flaring; international aviation and shipping excluded). *Consumption-based*
  emissions (after Peters, Davis and Andrew, 2012, *Biogeosciences* 9) add the CO2 emitted abroad to make
  what it imports and subtract the CO2 in what it exports; the GCP publishes *transfers* as territorial
  minus consumption-based, so a net importer of embodied CO2 has negative transfers. Values in tonnes of
  carbon are converted to CO2 with the publisher's factor 3.664. From 1990; consumption-based to 2023.
* **World fossil CO2 by fuel.** The same budget's fossil emissions by fuel (coal, oil, gas, cement,
  flaring), shown beside the coal, oil and gas sectors as context: every use of the fuel, never the
  sector's own emissions.
* **Transition indicators.** Energy Institute, Statistical Review of World Energy 2025, Country
  Transition Tracker: energy-related greenhouse gas emissions, fossil fuel consumption, renewables' share
  of energy consumption, the power generation mix, the carbon intensity of energy and of GDP, and energy
  per person, for 79 economies (31 for the power mix). Each is shown against the *median economy*, the
  middle of the economies the tracker lists, not a world average. The low-carbon share of power adds the
  wind, solar, hydro, other renewables and nuclear shares.
* **Regional pathways.** IEA (2025), World Energy Outlook 2025 free dataset, Regions (CC BY-NC-SA 4.0):
  the IEA's estimates for 2010, 2023 and 2024 and the Stated Policies and Current Policies scenarios for
  2035 and 2050. Each Country profile names the region it shows: the economy's own (United States, Japan,
  China, India, Brazil, Russia), the European Union for its members, Southeast Asia for its members, the
  broader region whose IEA definition names the economy, or, for economies the IEA counts as "other", the
  region of their UN sub-region. A regional pathway is the region's, not the economy's. The IEA publishes
  its Net Zero scenario for the World only; the World line stays beside it as context. IEA scenario
  projections, not observed data.
* **2030 milestones.** IEA (2021), Net Zero by 2050, Annex A (CC BY-NC-SA 3.0 IGO): the 2021 roadmap's
  World values for 2030, shown beside the 2025 pathways of the same quantity and labelled as an older
  edition (the IEA has updated the scenario since). Where the 2021 row is narrower (unabated coal and gas
  only, passenger cars without vans, combustion CO2 only), the table marks it.
* **Energy investment.** IEA (2026), World Energy Investment 2026 (CC BY 4.0): investment by sector for the
  World, Advanced economies, China, emerging market and developing economies (excluding China) and seven
  regions, 2015-2026, in billions of 2025 US dollars at market exchange rates; 2026 values are IEA
  estimates. Each sector shows the investment in its own activity (solar, wind, nuclear, battery storage,
  electricity networks, coal, oil and gas supply, fossil power) or in the deployment it supplies, with
  the match quality: geothermal sits inside "other renewables" and the IEA's end-use transport spending
  (mostly electric vehicles) stands in for EVs, each labelled a proxy.
* **Not shown: manufacturing emissions per value added.** The IEA Energy and Emissions per Value Added
  database was staged, but its terms require the IEA's permission for any external dissemination, so the
  manufacturing sectors (components and assembly) do not show it and say why.

## Money

Comtrade trade is in current US dollars. Clean Investment Monitor investment is in billions of 2024
US dollars. CM-FDI capital is in millions of US dollars as announced (nominal). Nominal and real values
are never put on one chart or in one ratio.

## Value states

| State | Meaning |
|---|---|
| Observed | the source reports a value |
| Reported zero | the source reports 0 |
| Not reported separately | the value sits inside the source's "Rest of world"; it is not a zero. One exception: where no source reports an economy's production of a fuel separately (EI's "Other", no EIA value), production is assumed to be 0, so its net balance is minus its consumption and its self-sufficiency 0%. Those values are drawn like any other, marked † "Production not reported separately; assumed 0" |
| Listed without a figure | the source lists the economy but withholds the number, or reports it as under 1%; for a CM-FDI project, capital "not disclosed" |
| Mirror | built from partners' declarations |
| Estimate | flagged by the source (the Clean Investment Monitor's 2025 includes an estimated fourth quarter) |
| Base year zero | growth is not defined |
| Not covered | the economy is outside the source's coverage |
| Regional value | the value belongs to a region or entity, not to the country |
| Old | the latest observation is older than the measure allows |

Maps hatch the states without a value; tables and tooltips say each state in words, and the "Source
note" column of every table carries the fact's own notes (an assumed-zero production, an EIA value).

## What this module does not show, and why

* **Index, weight and score values.** Rankings and weights belong to the Country profiles. Each measure's
  notes say which index it feeds, without showing the index. The one exception is what each
  country should do, a recommendation at fixed thresholds, shown in its own section.
* **Totals across technologies.** Trade baskets overlap, so a sum would count some goods twice.
* **The same figure twice.** Where a source reports one figure for manufacturing as a whole
  (manufacturing investment, the IEA's manufacturing shares, development aid), the components and
  assembly pages both show it, each with a note naming the other; headline sums count it once.
* **Regional or world values as country values.** World prices, IEA regions and entities, and
  technology readiness are shown at their own level and never ranked as if they were national.
* **Two trade bases on one page.** The matrix is shown; the exporter-reported basis appears only in the
  reconciliation table.
* **Area-integrated solar and wind potential as a ranking.** It ranks land area; it appears only in a
  scatter against resource quality.
* **Zero-fills as zeros.** Values a source does not report separately are marked as such; the one
  assumed zero (production no source reports, in the net balance) is drawn as a value and labelled.
* **Growth from zero or tiny bases.** Shown as "new" or "n/a".
* **Mixed units.** Manufacturing capacity is never summed across products; the six Energy Institute
  fuels are not shown as an energy mix.
* **Unverified units.** Where a unit could not be confirmed (the geothermal cost currency, the wind
  threshold, some commodity prices), the unit is labelled "unit to confirm".
* **Licensed data.** BNEF and BCG data are licensed and are not part of the public explorer.
* **Perspective dials.** The Country profile's dials do not apply here: measured data do not move with priorities.
`,Ae={obs:"observed",zero:"reported zero",nsr:"not reported separately (inside the source residual)",nq:"listed without a figure (withheld, or under 1% / not reported)",mirror:"from partners' declarations (exporter report x1.06)",est:"estimate flagged by the source (CIM 2025 includes estimated Q4)",na_growth:"base year zero (growth not defined)"},q="Licensed data (BNEF, BCG) are not part of the public explorer.";function V(s,o=s.vars){return o.map(e=>({var_id:e.id,theme:e.theme,family:e.family,label:e.label,unit:e.unit.long||e.unit.short,data_year:e.data_year,level:e.native_level,item_axis:e.item_axis,additive:e.agg,world_basis:e.world_basis,source:e.source.short,licence:e.licence,phase:e.phase,provenance:e.prov,caveats:s.caveatTexts(e).join(" | ")}))}function G(s,o){return[...s.sources.values()].filter(e=>!0).map(e=>({id:e.id,short:e.short,citation:e.citation,publisher:e.publisher,edition:e.edition,url:T(e.url),licence:e.licence,accessed:e.accessed,attribution:e.attribution,transform:e.transform,issues:e.issues}))}function K(s){const o=[];for(const e of s.items)for(const t of z){const i=s.coverage.get(`${e.idx}|${t}`);i&&o.push({item:e.slug,item_axis:e.axis,family:t,status:i.status,n_economies:i.n_geo,reason:i.reason,sources:i.sources.map(c=>s.sources.get(c)?.short??c).join("; ")})}return o}function $e(s,o,e,t=[]){const i=[...s.sources.values()].map(c=>`  - ${c.short}${c.edition?` (${c.edition})`:""}: ${c.citation}${c.licence==="attribution"&&c.attribution?` Attribution: ${c.attribution}`:""}`);return["Allied Industrial Base Explorer: Sectors, all sector data",`From: ${e}`,`Sector data bundle: ${o?.bundle_id??"unknown"} (export ${o?.created??"unknown"}${o?.git_commit?`, git ${o.git_commit.slice(0,10)}`:""})`,"","Measured values in each source’s own units and years. No index, weight or score values.","One CSV per measure family; columns: iso3c, economy, group, tier, eu_member, var_id, measure, item, year, value, unit, status, share_of_world, world_basis, rank, source, licence, note. NA is empty.",'note: the fact’s own notes, e.g. "Production not reported separately; assumed 0" (a net balance or self-sufficiency with status nsr and a value: the production no source reports separately counts as 0) or "EIA International Energy Statistics, 2024".',"dictionary.csv: every measure (unit, data year, level, source, licence, caveats). sources.csv: every source. coverage.csv: items x families.",...t,"","Status codes:",...Object.entries(Ae).map(([c,r])=>`  ${c}: ${r}`),"","Sources and licences (attribution required where stated):",...i,"",q,""].join(`\r
`)}function Me(s,o,e){const t=new Map,i=(r,u,a,l)=>{const d=s.items[u]??null;let h=t.get(r.family);h||t.set(r.family,h=[]);const f=l.world(r.idx,u,a);for(const p of l.rows(r.idx,u,a)){const w=s.geos[p.geo]??null;h.push({geo:w&&w.kind!=="residual"?w:null,economy:w&&w.kind==="residual"?w.name:void 0,v:r,item:d,year:p.obs_year??a,value:Number.isFinite(p.value)?p.value:null,status:p.status,share:f&&Number.isFinite(p.value)&&f.value>0?p.value/f.value:null,note:ge(s,r.id,p)})}};for(const r of s.vars){for(const u of o.itemsOf(r.idx))for(const a of o.yearsOf(r.idx,u))i(r,u,a,o);if(e)for(const u of e.itemsOf(r.idx))for(const a of e.yearsOf(r.idx,u))o.has(r.idx,u,a)||i(r,u,a,e)}const c={};for(const[r,u]of t)u.length&&(c[`${r}.csv`]=fe(s,u));return c}const We="cm-fdi-projects.csv: every cross-border clean-tech manufacturing project of the Cleantech Manufacturing FDI dataset (CM-FDI) as published, one row per project (CC BY 4.0; changes: project counts and sums of disclosed capital elsewhere in this explorer were computed by the Explorer's authors; no record altered).";function Oe(s,o,e,t,i,c=null){return{...Me(s,e,t),...c?.files??{},"dictionary.csv":y(V(s)),"sources.csv":y(G(s)),"coverage.csv":y(K(s)),"README.txt":$e(s,o,i,c?.readme??[])}}function Re(s,o,e){const t=ke(e);return y(Te(o).map(i=>({id:i.id,iso3c:s.geos[i.geo]?.code??null,jurisdiction:s.geos[i.geo]?.name??null,level:i.jurisdiction,title:t.get(i.id)?.title??null,url:T(t.get(i.id)?.url),year:i.year,status:i.status,type:i.type,tech_tags:i.tags.join("|"),stage_tags:i.stages.join("|"),tag_source:i.tech_src,cross_cutting:i.cross_cutting,source:"IEA Policies and Measures",licence:"attribution"})))}function Be(s,o){const e=s.varById.get("trade.flow"),t=[];for(const i of me(o))for(const c of[2020,2024]){const r=pe(o,i,c),u=r.reduce((a,l)=>a+l.v,0);for(const a of[...r].sort((l,d)=>d.v-l.v))t.push({exporter:s.geos[a.e]?.code,exporter_name:s.geos[a.e]?.name,importer:s.geos[a.i]?.code,importer_name:s.geos[a.i]?.name,var_id:"trade.flow",item:s.items[i]?.slug,year:c,value:a.v,unit:"USD",status:a.s==="mirror"?"mirror":"obs",share_of_world:u>0?a.v/u:null,source:e?.source.short??"UN Comtrade",licence:e?.licence??"open"})}return y(t)}function Pe(s){const o=s.countries.filter(r=>r.group==="core").length,e=s.countries.filter(r=>r.group==="partner").length,t=s.euOutsideCoalition,i=t.length?`${t.join(", ")} ${t.length===1?"is an EU member":"are EU members"} outside the coalition tiers; in bloc mode ${t.length===1?"its values count":"their values count"} in the core.`:"",c=Ne.replace(/\{members_n\}/g,String(o+e)).replace(/\{core_n\}/g,String(o)).replace(/\{partner_n\}/g,String(e)).replace(/\{eu_outside_sentence\}/g,i);return ce.parse(c,{async:!1,gfm:!0})}function De(){const s=E(),o=b.useMemo(()=>V(s),[s]);return n.jsx(j,{title:"Every measure: unit, years, source and caveats",vars:s.vars.slice(0,1).map(e=>({var:e.id})),caption:{sub:`${s.vars.length} measures in this data build: label, unit, data year, level, how it adds up, source, licence and caveats.`,badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"sector-dictionary",text:y(o)}),summary:`${o.length} measures.`,children:n.jsx(S,{rows:s.vars,caption:"Variable dictionary",search:!0,pageSize:20,rowKey:e=>e.id,cols:[{id:"l",header:"Measure",value:e=>e.label,minWidth:200},{id:"id",header:"Id",value:e=>e.id},{id:"u",header:"Unit",value:e=>e.unit.long||e.unit.short},{id:"y",header:"Data year",value:e=>e.data_year},{id:"lv",header:"Level",value:e=>e.native_level},{id:"a",header:"Adds up",value:e=>e.agg==="sum"?"sum":e.agg==="ratio"?"ratio of sums":"no"},{id:"s",header:"Source",value:e=>e.source.short},{id:"lc",header:"Licence",value:e=>e.licence},{id:"p",header:"Phase",value:e=>e.phase},{id:"c",header:"Caveats",value:e=>s.caveatTexts(e).join(" · ")||null,minWidth:240}]})})}function Ue(){const s=E(),o=[...s.sources.values()];return n.jsx(j,{title:"Every source: edition, licence and attribution",vars:s.vars.slice(0,1).map(e=>({var:e.id})),caption:{sub:`${o.length} sources, with how this export transforms each one and its known issues.`,badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"sector-sources",text:y(G(s))}),summary:`${o.length} sources.`,children:n.jsx(S,{rows:o,caption:"Sources",search:!0,pageSize:20,rowKey:e=>e.id,cols:[{id:"s",header:"Source",value:e=>e.short,minWidth:150},{id:"c",header:"Citation",value:e=>e.citation,minWidth:260},{id:"p",header:"Publisher",value:e=>e.publisher},{id:"e",header:"Edition",value:e=>e.edition},{id:"u",header:"Link",value:e=>T(e.url),cell:e=>{const t=T(e.url);return t?n.jsx(be,{href:t,children:new URL(t).hostname}):"–"}},{id:"l",header:"Licence",value:e=>e.licence==="attribution"?"open, attribution":e.licence},{id:"a",header:"Accessed",value:e=>e.accessed},{id:"at",header:"Attribution",value:e=>e.attribution,minWidth:200},{id:"t",header:"How the export handles it",value:e=>e.transform,minWidth:220},{id:"i",header:"Known issues",value:e=>e.issues,minWidth:200}]})})}const U={country:"✓",region:"◐",global:"○",licensed:"",none:"—"};function He(){const s=E(),o=z.filter(a=>a!=="development"&&[...s.coverage.values()].some(l=>l.family===a)),e=s.cells,t=b.useMemo(()=>{const a=new Map;for(const l of e){const d=l.techSlug??l.slug;let h=a.get(d);h||a.set(d,h={key:`tech:${d}`,label:l.tech??l.label,children:[]}),h.children.push({key:String(l.idx),label:l.stage??l.label})}return[...a.values()].flatMap(l=>l.children.map(d=>({key:d.key,label:`${l.label} — ${d.label}`})))},[e]),i=Math.max(1,...[...s.coverage.values()].map(a=>a.n_geo)),c=s.countries.filter(a=>a.group==="core"||a.group==="partner").sort((a,l)=>a.group===l.group?a.name.localeCompare(l.name,"en"):a.group==="core"?-1:1),r=b.useMemo(()=>{const a=new Map;for(const h of s.vars)h.roster&&s.rosters.has(h.roster)&&!a.has(h.roster)&&a.set(h.roster,h.source.short);const l=[...a.entries()].map(([h,f])=>({roster:h,label:f})),d=new Set(l.map(h=>h.label).filter((h,f,p)=>p.indexOf(h)!==f));return l.map(h=>({...h,label:d.has(h.label)?`${h.label} (${h.roster.replace(/_/g," ")})`:h.label}))},[s]),u=r.map(a=>({c:a,miss:c.filter(l=>!s.rosters.get(a.roster)?.has(l.idx))})).filter(a=>a.miss.length>0&&a.miss.length<c.length);return n.jsxs("div",{className:"space-y-6",children:[n.jsx(j,{title:"Coverage by sector and measure family",vars:s.vars.slice(0,1).map(a=>({var:a.id})),caption:{sub:"✓ country data · ◐ region or entity data · ○ a global value only · — not available. Shaded by the number of economies with data.",badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"sector-coverage",text:y(K(s))}),summary:`Coverage of ${e.length} sectors across ${o.length} measure families.`,children:n.jsx(Ie,{rows:t,cols:o.map(a=>({key:a,label:s.families.get(a)?.label??a})),rowHeader:"Sector",caption:"Coverage: sectors by measure family",domain:[0,i],cell:(a,l)=>{const d=s.coverage.get(`${a}|${l}`);return!d||d.status==="none"||d.status==="licensed"?{value:null,display:d?.status==="licensed"?"licensed":U.none,title:d?d.status==="licensed"?"Licensed: not in this build":le(d.reason):"No data"}:{value:d.n_geo,display:`${U[d.status]} ${d.status==="country"?d.n_geo:""}`.trim(),title:`${d.status==="country"?`${d.n_geo} economies`:d.status==="region"?`${d.n_geo} regions or entities`:"a global value"}${d.sources.length?`; ${d.sources.map(h=>s.sources.get(h)?.short??h).join(", ")}`:""}`}}})}),n.jsx(j,{title:"Which sources cover the coalition members",vars:s.vars.slice(0,1).map(a=>({var:a.id})),caption:{sub:`The coalition's ${c.length} members against each source's coverage (✓ covered, — not covered).`,badge:null,caveats:[],coverage:null,spanNote:null},csv:()=>({name:"coalition-coverage",text:y(c.map(a=>({iso3c:a.code,economy:a.name,tier:a.tier,...Object.fromEntries(r.map(l=>[l.roster,s.rosters.get(l.roster)?.has(a.idx)?1:0]))})))}),notes:u.length?n.jsx("ul",{className:"list-disc space-y-0.5 pl-5",children:u.map(a=>n.jsxs("li",{children:[a.c.label," does not cover ",we(a.miss.map(l=>l.name)),"."]},a.c.roster))}):void 0,summary:`${c.length} coalition members against ${r.length} source rosters.`,children:n.jsx(S,{rows:c,caption:"Coalition members by source",search:!0,pageSize:20,rowKey:a=>a.code,cols:[{id:"e",header:"Member",value:a=>a.name,minWidth:140},{id:"t",header:"Tier",value:a=>a.group==="core"?"core":"partner"},...r.map(a=>({id:a.roster,header:a.label,value:l=>s.rosters.get(a.roster)?.has(l.idx)?"✓":"—",title:a.roster}))]})})]})}function Fe(){const s=E(),o=[...s.reconcile].sort((t,i)=>(s.items[t.item]?.sort??0)-(s.items[i.item]?.sort??0)||i.year-t.year);if(!o.length)return n.jsx("p",{className:"text-sm text-paper-mute",children:"No reconciliation rows in this build."});const e=o.filter(t=>t.warn).length;return n.jsx(j,{title:"Trade basis: the matrix and the exporters' reports",vars:[{var:"trade.exports"},{var:"trade.rca"}],subExtra:n.jsx(ve,{children:"Each row compares one sector and year on two bases: the reconciled matrix this module shows (what importers declare, and partners' reports where an importer is silent) and the exporters' own reports. Close numbers mean the choice of basis does not change the story; WARN marks rows where China's share differs by more than 3 points."}),caption:{coverage:`${o.length} sector-years; ${e} marked WARN (China's shares differ by more than 3 points).`},csv:()=>({name:"trade-basis-reconciliation",text:y(o.map(t=>({item:s.items[t.item]?.slug,year:t.year,matrix_total_usd:t.matrix_total,reported_total_usd:t.reported_total,matrix_china_share:t.matrix_china,reported_china_share:t.reported_china,matrix_hhi:t.matrix_hhi,reported_hhi:t.reported_hhi,n_reporters:t.n_reporters,warn:t.warn})))}),notes:n.jsxs("p",{children:["The gap has three reasons: importers declare cost, insurance and freight while exporters declare free on board; economies that do not report are seen in the matrix through their partners; Hong Kong's re-exports are out of the exporter-reported basis. The country indices rank the exporter-reported ",n.jsx(de,{id:"hhi",children:"concentration index (HHI)"}),"."]}),summary:`${o.length} sector-years compared; ${e} differ in China's share by more than 3 points.`,children:n.jsx(S,{rows:o,caption:"Trade-basis reconciliation",pageSize:30,rowKey:t=>`${t.item}|${t.year}`,cols:[{id:"c",header:"Sector",value:t=>s.items[t.item]?s.cellLabel(s.items[t.item]):"",minWidth:170},{id:"y",header:"Year",value:t=>t.year,num:!0},{id:"mt",header:"Matrix total",value:t=>t.matrix_total,cell:t=>O(t.matrix_total,"table"),num:!0},{id:"rt",header:"Exporter-reported total",value:t=>t.reported_total,cell:t=>O(t.reported_total,"table"),num:!0},{id:"mc",header:"China (matrix)",value:t=>t.matrix_china,cell:t=>R(t.matrix_china),num:!0},{id:"rc",header:"China (reported)",value:t=>t.reported_china,cell:t=>R(t.reported_china),num:!0},{id:"mh",header:"Concentration (HHI), matrix",value:t=>t.matrix_hhi,cell:t=>B(t.matrix_hhi),num:!0},{id:"rh",header:"Concentration (HHI), reported",value:t=>t.reported_hhi,cell:t=>B(t.reported_hhi),num:!0},{id:"n",header:"Reporters",value:t=>t.n_reporters,num:!0},{id:"w",header:"Check",value:t=>t.warn?"WARN":"ok",cell:t=>t.warn?n.jsx("span",{className:"tag",style:{borderColor:"var(--color-signal)",color:"var(--color-paper)"},children:"WARN"}):"ok"}]})})}function ze(){const s=E(),o=_e(),e=L(),t=H(),i=(e.data?.chunks??[]).filter(m=>m.name.startsWith("sector-trade-")).map(m=>m.name.slice(13)),[c,r]=b.useState(null),u=c&&i.includes(c)?c:i[0]??null,[a,l]=b.useState(null),[d,h]=b.useState(null),f=(m,g)=>async()=>{l(m),h(null);try{await g()}catch(v){h(v instanceof Error?v.message:String(v))}finally{l(null)}},p=m=>{const g=o.chunkBytes(m);return g?` (${Ee(g)} to load)`:""},w=f("all",async()=>{const m=await o.load("sector-facts"),g=e.data?.chunks.some(x=>x.name==="sector-series")?await o.load("sector-series"):null,v=e.data?.chunks.some(x=>x.name==="sector-fdi")?await o.load("sector-fdi"):null,N=v?P(v):null,Q=N?{files:{"cm-fdi-projects.csv":D(s,N,N.projects)},readme:[We]}:null,X=Oe(s,e.data,je(m),g?Se(g):null,`${window.location.origin}${t.pathname}`,Q),ee=Object.fromEntries(Object.entries(X).map(([x,$])=>[x,x.endsWith(".csv")?_($):$])),{zipTexts:te}=await ie(async()=>{const{zipTexts:x}=await import("./zip-BoDpD1Pf.js");return{zipTexts:x}},__vite__mapDeps([0,1]));k(new Blob([te(ee)],{type:"application/zip"}),"sector-data.zip")}),Y=f("flows",async()=>{if(!u)return;const m=await o.load(W(u));k(new Blob([_(Be(s,m))],{type:"text/csv;charset=utf-8"}),`trade-flows-${u}.csv`)}),A=!!e.data?.chunks.some(m=>m.name==="sector-fdi"),I=xe(s),Z=f("fdi",async()=>{const m=await o.load("sector-fdi"),g=P(m);k(new Blob([_(D(s,g,g.projects))],{type:"text/csv;charset=utf-8"}),"cm-fdi-projects.csv")}),J=f("policy",async()=>{const m=await o.load("sector-policy"),g=e.data?.chunks.some(v=>v.name==="sector-policy-text")?await o.load("sector-policy-text"):null;k(new Blob([_(Re(s,m,g))],{type:"text/csv;charset=utf-8"}),"policy-list.csv")});return n.jsxs("div",{className:"space-y-4",children:[n.jsxs("ul",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[n.jsxs("li",{className:"card flex flex-col p-5",children:[n.jsx("h3",{className:"text-base font-medium text-paper",children:"All sector data (.zip)"}),n.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["One CSV per measure family, dictionary.csv, sources.csv, coverage.csv",A?", the CM-FDI projects":""," and a README with citations, licences, the vintage and the status codes.",p("sector-facts")]}),n.jsx("button",{type:"button",className:"btn btn-ghost btn-sm mt-3 self-start",disabled:a!==null,onClick:w,children:a==="all"?"Preparing…":"Download all sector data"})]}),n.jsxs("li",{className:"card flex flex-col p-5",children:[n.jsx("h3",{className:"text-base font-medium text-paper",children:"Trade flows for one technology (.csv)"}),n.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["Every bilateral flow of the technology's sectors, 2020 and 2024, from the reconciled matrix.",u?p(W(u)):""]}),i.length>0?n.jsxs("div",{className:"mt-3 flex flex-wrap items-end gap-2",children:[n.jsx(ne,{label:"Technology",value:u??"",options:i.map(m=>({value:m,label:ue[m]})),onChange:m=>r(m),className:"min-w-[10rem]"}),n.jsx("button",{type:"button",className:"btn btn-ghost btn-sm",disabled:a!==null||!u,onClick:Y,children:a==="flows"?"Preparing…":"Download flows"})]}):n.jsx("p",{className:"mt-3 text-sm text-paper-mute",children:"No trade data in this build."})]}),n.jsxs("li",{className:"card flex flex-col p-5",children:[n.jsx("h3",{className:"text-base font-medium text-paper",children:"Policy list (.csv)"}),n.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["Every IEA Policies and Measures record with its year, status, type, technology and stage tags, title and IEA link (attribution: IEA).",p("sector-policy")]}),n.jsx("button",{type:"button",className:"btn btn-ghost btn-sm mt-3 self-start",disabled:a!==null||!e.data?.chunks.some(m=>m.name==="sector-policy"),onClick:J,children:a==="policy"?"Preparing…":"Download the policy list"})]}),A&&n.jsxs("li",{className:"card flex flex-col p-5",children:[n.jsx("h3",{className:"text-base font-medium text-paper",children:"Factory projects (CM-FDI), every cross-border project (.csv)"}),n.jsxs("p",{className:"mt-1 flex-1 text-sm text-paper-dim",children:["Every project of the Cleantech Manufacturing FDI Dataset",I?.edition?` (edition ${I.edition})`:"",': parent, headquarters, destination, status, years, capital investment (or "not disclosed"), joint venture and the source links per field. Licensed CC BY 4.0: cite as ',I?.citation??"the dataset’s site specifies",".",p("sector-fdi")]}),n.jsx("button",{type:"button",className:"btn btn-ghost btn-sm mt-3 self-start",disabled:a!==null,onClick:Z,children:a==="fdi"?"Preparing…":"Download the projects"})]})]}),d&&n.jsx(F,{kind:"error",title:"The download could not be prepared",children:d}),n.jsx("p",{className:"text-sm text-paper-mute",children:q})]})}function Le(){const s=re(),[o,e]=b.useState(void 0);return b.useEffect(()=>{if(s.strategic)return;let t=!0;const i="/aib-explorer/",c=typeof window<"u"?window.location.origin:"";return fetch(`${c}${i}data/manifest.json`,{cache:"no-cache"}).then(r=>r.ok?r.json():null).then(r=>{t&&e(r&&typeof r=="object"&&typeof r.bundle_id=="string"?r.bundle_id:null)}).catch(()=>t&&e(null)),()=>{t=!1}},[s.strategic]),s.strategic?s.strategic.bundle_id:o}function qe(){const s=L(),o=Le(),e=s.data;if(!e)return null;const t=e.strategic_bundle_id&&o?e.strategic_bundle_id===o:null,i=e.validation.filter(r=>r.status==="PASS").length,c=e.validation.filter(r=>r.status==="WARN");return n.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[n.jsxs("section",{className:"card p-5","aria-labelledby":"build-card-h",children:[n.jsx("h3",{id:"build-card-h",className:"rule-neis-sm mb-3 text-base font-medium text-paper",children:"This data build"}),n.jsx(oe,{rows:[["Exported",Ce(e.created)],["Git commit",e.git_commit?e.git_commit.slice(0,10):"–"],["Sector bundle",e.bundle_id.slice(0,12)],["Strategic bundle it was built against",e.strategic_bundle_id?e.strategic_bundle_id.slice(0,12):"–"],["Generator",e.generator],["Pipeline marker",e.pipeline_marker??"–"]]}),n.jsxs("div",{className:"mt-3",children:[t===!0&&n.jsx("p",{className:"text-sm text-paper-dim",children:"✓ Built from the same pipeline run as the Strategic data."}),t===!1&&n.jsxs(F,{kind:"warning",children:["Built from a different run than the Strategic data loaded here (",String(o).slice(0,12),")."]}),t===null&&n.jsx("p",{className:"text-sm text-paper-mute",children:o===void 0?"Checking the Strategic data…":"The Strategic data could not be checked."})]})]}),n.jsxs("section",{className:"card p-5","aria-labelledby":"valid-h",children:[n.jsx("h3",{id:"valid-h",className:"rule-neis-sm mb-3 text-base font-medium text-paper",children:"Validation"}),n.jsxs("p",{className:"text-sm text-paper-dim",children:[i," checks passed",c.length?`; ${c.length} warnings`:"","."]}),c.length>0&&n.jsx("ul",{className:"mt-2 list-disc space-y-1 pl-5 text-sm text-paper-dim",children:c.map(r=>n.jsxs("li",{children:[n.jsx("span",{className:"text-paper",children:r.check})," (",r.n,")",r.detail?`: ${r.detail}`:""]},r.check))})]}),n.jsxs("section",{className:"card p-5 lg:col-span-2","aria-labelledby":"inputs-h",children:[n.jsx("h3",{id:"inputs-h",className:"rule-neis-sm mb-3 text-base font-medium text-paper",children:"Input files"}),n.jsx(S,{rows:e.sources,caption:"Input files",search:!0,pageSize:15,rowKey:r=>r.path,cols:[{id:"p",header:"Path",value:r=>r.path,minWidth:260},{id:"m",header:"Modified",value:r=>r.mtime},{id:"b",header:"Bytes",value:r=>r.bytes,num:!0},{id:"h",header:"MD5",value:r=>r.md5.slice(0,12),title:"first 12 characters"}]})]})]})}function xt(){const s=E(),o=H();he("Sources & data","Sector Insights");const e=b.useMemo(()=>Pe(s),[s]);return ye(o.hash,!0),n.jsxs("div",{className:"space-y-10",children:[n.jsx(se,{eyebrow:"SECTORS · SOURCES",title:M.title,lede:M.lede}),n.jsxs(C,{id:"about",title:"About the Sector pages",children:[n.jsx("article",{className:"prose-neis max-w-4xl",dangerouslySetInnerHTML:{__html:e}}),n.jsx("p",{className:"mt-4 text-sm",children:n.jsx(ae,{className:"link",to:"/glossary",children:"Glossary: every term used in the three modules, in plain words →"})})]}),n.jsx(C,{id:"dictionary",title:"Variable dictionary",children:n.jsx(De,{})}),n.jsx(C,{id:"sources",title:"Sources",children:n.jsx(Ue,{})}),n.jsx(C,{id:"coverage",title:"Coverage",children:n.jsx(He,{})}),n.jsx(C,{id:"reconciliation",title:"Trade basis",children:n.jsx(Fe,{})}),n.jsx(C,{id:"downloads",title:"Downloads",children:n.jsx(ze,{})}),n.jsx(C,{id:"build",title:"Build",children:n.jsx(qe,{})})]})}export{Pe as aboutHtml,xt as default};
//# sourceMappingURL=SourcesView-DCBBNX1D.js.map
