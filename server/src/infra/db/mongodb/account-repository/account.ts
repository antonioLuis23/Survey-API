import { AddAccountRepository } from '../../../../data/protocols/add-account-repository';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { AccountModel } from '../../../../domain/models/account';
import { MongoHelper } from '../helpers/mongo-helper';
export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts');
    const { insertedId } = await accountCollection.insertOne(accountData);
    const account = await accountCollection.findOne({ _id: insertedId });
    console.log('account:', account);
    const { _id, ...accountWithoutId } = account!;
    const returnAccount = Object.assign({}, accountWithoutId, { id: _id.toString() }) as AccountModel;
    console.log('returnAccount:', returnAccount);
    return returnAccount;
  }
}
