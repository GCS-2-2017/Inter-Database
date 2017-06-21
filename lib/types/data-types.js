const MIN_TINYINT = 0
const MAX_TINYINT = 255
const MIN_SMALLINT = -32768
const MAX_SMALLINT = 32767
const MIN_INT = -2147483648
const MAX_INT = 2147483648
const MIN_BIGINT = -9223372036854775808
const MAX_BIGINT = 9223372036854775808

function outOfRange (number) {
  let query = ''

  if (number < MAX_TINYINT && number > MIN_TINYINT) {
    query = ' TINYINT '
  } else if (number < MAX_SMALLINT && number > MIN_SMALLINT) {
    query = ' SMALLINT '    
  } else if (number < MAX_INT && number > MIN_INT) {
    query = ' INT '
  } else {
    query = ' BIGINT '
  }
  
  return query
}

function STRING (length) {
  return ' VARCHAR(' + length + ') '
}

function DOUBLE () {
  return ' REAL '
}

function INT (number) {
  let query = outOfRange(number)
  return query
}