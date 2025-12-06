// metrics helpers for bus route planner for district transportation

export function metricsStep0(records: any[], limit = 192) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep1(records: any[], limit = 424) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep2(records: any[], limit = 174) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep3(records: any[], limit = 38) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep4(records: any[], limit = 451) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep5(records: any[], limit = 136) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep6(records: any[], limit = 80) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
