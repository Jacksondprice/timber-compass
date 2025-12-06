// sync helpers for bus route planner for district transportation

export function syncStep0(records: any[], limit = 438) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep1(records: any[], limit = 255) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep2(records: any[], limit = 286) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep3(records: any[], limit = 80) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep4(records: any[], limit = 239) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep5(records: any[], limit = 308) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep6(records: any[], limit = 122) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep7(records: any[], limit = 389) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep8(records: any[], limit = 467) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep9(records: any[], limit = 261) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep10(records: any[], limit = 332) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
