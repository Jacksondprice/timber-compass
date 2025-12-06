// roster helpers for bus route planner for district transportation

export function rosterStep0(records: any[], limit = 263) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep1(records: any[], limit = 256) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep2(records: any[], limit = 260) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep3(records: any[], limit = 91) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep4(records: any[], limit = 103) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep5(records: any[], limit = 129) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep6(records: any[], limit = 378) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep7(records: any[], limit = 244) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep8(records: any[], limit = 83) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep9(records: any[], limit = 158) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep10(records: any[], limit = 264) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
