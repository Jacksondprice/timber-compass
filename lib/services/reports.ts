// reports helpers for bus route planner for district transportation

export function reportsStep0(records: any[], limit = 113) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep1(records: any[], limit = 66) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep2(records: any[], limit = 349) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep3(records: any[], limit = 90) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep4(records: any[], limit = 437) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep5(records: any[], limit = 210) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep6(records: any[], limit = 358) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function reportsStep7(records: any[], limit = 320) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('reports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
