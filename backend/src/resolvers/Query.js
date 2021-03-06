const { forwardTo } = require('prisma-binding');
const {hasPermission} = require ('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
  async users(parent, args,ctx,info){
    //0 check if logge in
    if(!ctx.request.userId){
      throw new Erros('You must be logged in');
    }
    //1 check if the user has teh permussion to query all the users
    hasPermission(ctx.request.user, ['ADMIN','PERMISSIONUPDATE','USER']);
    //2 if yes query all the users
    return ctx.db.query.users({},info);
  },
  async order(parent,args,ctx,info){
    //1 Make sure they are logged in
    if(!ctx.request.userId) {
      throw new Error('YOu arent logged in')
    }
    // Query the current order
    const order = await ctx.db.query.order({
      where:{id:args.id}
    },info);
    //3 Check if they have the permissions to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes('ADMIN');
    if(!ownsOrder || !hasPermission){
      throw new Error("You can't see that bud!")
    }
    //4 Return the order
    return order;
  },
  async orders(parents, args,ctx, info){
    const {userId} = ctx.request
    if (!userId) {
      throw new Error('You must be signed in')
    }
    return ctx.db.query.orders({
      where:{
        user:{id:userId}
      }
    },info)
  }
};

module.exports = Query;
