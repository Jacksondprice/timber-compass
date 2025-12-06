// scheduling helpers for bus route planner for district transportation

export function schedulingStep0(records: any[], limit = 394) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep1(records: any[], limit = 160) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep2(records: any[], limit = 366) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep3(records: any[], limit = 282) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep4(records: any[], limit = 446) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep5(records: any[], limit = 382) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function schedulingStep6(records: any[], limit = 239) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('scheduling step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
