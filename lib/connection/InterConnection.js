'use strict'
import { InterConfiguration } from '../configuration/InterConfiguration'
import { selectDb } from '../helpers/strategy'

const ERROR_MESSAGE = 'Can not call an abstract method.'

class InterConnection {
  /**
  * Constructor implementation required
  * @param {Object} [connection=null] An object with further options to connect database
  * @excepetion {TypeError} thrown when tried to instatiate abstract class or type of connection is not know
  */
  constructor (connection) {
    if (this.constructor === InterConnection) {
      throw new TypeError('Can not construct an Abstract class')
    }
    if (connection instanceof InterConfiguration) {
      this.connection = connection
    } else {
      throw new TypeError('Connection type ' + typeof connection + ' not known.')
    }
  }

  /**
  * Implementation required
  * Fetches the correct instance of a class, given the configuration class.
  * @param {Object} [connection=] The object containing the configuration class.
  * @exception {TypeError} Thrown if the connection object is not a child class of InterConfiguration
  * @return {Object} The instance of the correct concrete class
  */
  static getInstance (connection) {
    if (this !== InterConnection) {
      return this
    }
    if (connection instanceof InterConfiguration) {
      let path = selectDb(connection.config.type, '../connection')
      let DBClass = require(path)

      return new DbStrategy(connection)
    } else {
      throw new TypeError('Connection type ' + typeof connection + ' not known.')
    }
  }

  /**
  * Implementation required
  * This method returns a array object as result from selected database
  * @exception  {TypeError} thrown when a abstract method is called
  */
  orderBy () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  async where () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method returns a array object as result which is a unique
  * table constructed from two tables with attribute in common.
  * @exception  {TypeError} thrown when a abstract method is called
  */
  innerJoin () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method returns a array object as result which contains the
  * information of the first table between A and B, which contains the
  * attribute in common.
  * @exception  {TypeError} thrown when a abstract method is called
  */
  leftJoin () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method returns a array object as result which contains the
  * information of the second table between A and B, which contains the
  * attribute in common.
  */
  rightJoin () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method returns a array object as result which contains the
  * not in common informationsbetween A and B, which contains the
  * attribute in common.
  */
  outerJoin () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method returns a array object as result which contains the informations
  * about the request argument.
  * @exception  {TypeError} thrown when a abstract method is called
  */
  async select () {
    throw new TypeError(ERROR_MESSAGE)
  }

   /**
  * Implementation required
  */
  async selectDistinct () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method return a array object as result which contains the informations
  * about the table where the values were inserted.
  * @exception  {TypeError} thrown when a abstract method is called
  */
  async insert () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method return a array object as result which contains updated
  * informations about requested argument.
  * @exception  {TypeError} thrown when a abstract method is called
  */
  async update () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  * This method return a array object as result which contains updated
  * informations whithout the values that was deleted.
  * @exception  {TypeError} thrown when a abstract method is called
  */
  async delete () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  async table () {
    throw new TypeError(ERROR_MESSAGE)
  }

  /**
  * Implementation required
  */
  async where () {
    throw new TypeError(ERROR_MESSAGE)
  }
}

export { InterConnection }
