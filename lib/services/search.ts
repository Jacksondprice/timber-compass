// search helpers for bus route planner for district transportation

export function searchStep0(records: any[], limit = 32) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep1(records: any[], limit = 120) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep2(records: any[], limit = 212) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep3(records: any[], limit = 250) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep4(records: any[], limit = 81) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep5(records: any[], limit = 213) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep6(records: any[], limit = 250) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep7(records: any[], limit = 45) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep8(records: any[], limit = 431) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
