# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Studio.create(
  [
    {
      name: 'Shawl-Anderson Dance Center',
      address: '2704 Alcatraz Ave, Berkeley, CA 94705',
      phone_number: '5106545921',
      class_website: 'https://www.shawl-anderson.org/class-schedule'
    },

    {
      name: 'Dance Mission Theater',
      address: '3316 24th St, San Francisco, CA',
      phone_number: '4158264441',
      class_website: 'https://clients.mindbodyonline.com/classic/mainclass?studioid=15734'
    },

    {
      name: 'AXIS Dance',
      address: '1428 Alice St #200, Oakland, CA 94612',
      phone_number: '5106250110',
      class_website: 'https://linesballet.org/dance-center/classes/'
    },

    {
      name: 'ODC',
      address: '351 Shotwell St, San Francisco, CA 94110',
      phone_number: '4155498519',
      class_website: 'http://www.axisdance.org/open-company-classes'
    },

    {
      name: 'LINES Ballet',
      address: '26 7th St #5, San Francisco, CA 94103',
      phone_number: '4158633040',
      class_website: 'http://odc.dance/schedule'
    }
  ]
)
