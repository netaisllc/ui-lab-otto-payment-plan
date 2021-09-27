import { addWeeks, format, isFriday, isMonday, isSaturday, isSunday, nextFriday } from 'date-fns';

export const upperFirst = ( str ) => {
	if ( str ) {
		const f = str.charAt( 0 );
		return `${ f.toUpperCase() }${ str.slice( 1 ) }`;
	}
}

/**
 * Next Payment Dates.
 * Enrollment on a Saturday, Sunday or Monday means, for weekly plan, first payment 
 * is due this Friday (and, for bi-weekly plan, this Friday plus one week.
 * Enrollment on any other day means, for weekly plan, first payment is due a week
 * from this Friday (and, for bi-weekly plan, add another week)
 * @returns Payment dates
 */

export const getNextPaymentDueOnDates = () => {
	const today = new Date();

	let nextPaymentDueOn = nextFriday( today )

	if ( isFriday( today ) || isSaturday( today ) || isSunday( today ) || isMonday( today ) ) {
		return {
			biweekly: format( addWeeks( nextPaymentDueOn, 1 ), 'MMM do' ),
			weekly: format( nextPaymentDueOn, 'MMM do' )
		}
	}

	nextPaymentDueOn = addWeeks( nextPaymentDueOn, 1 );
	return {
		biweekly: format( addWeeks( nextPaymentDueOn, 1 ), 'MMM do' ),
		weekly: format( nextPaymentDueOn, 'MMM do' )
	}
}


