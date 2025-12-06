// analytics helpers for bus route planner for district transportation

export function analyticsStep0(records: any[], limit = 256) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep1(records: any[], limit = 71) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep2(records: any[], limit = 104) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep3(records: any[], limit = 245) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep4(records: any[], limit = 157) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep5(records: any[], limit = 128) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep6(records: any[], limit = 259) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
