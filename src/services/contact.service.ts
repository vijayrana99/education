import { contactAction } from '../actions/contact.action'

export class ContactService {
  async submitContact(data: any) {
    return contactAction.create(data)
  }

  async getContactSubmissions(params: any) {
    return contactAction.findAll(params)
  }

  async getContactSubmission(id: string) {
    return contactAction.findById(id)
  }

  async updateContactStatus(id: string, status: 'NEW' | 'READ' | 'RESPONDED') {
    return contactAction.updateStatus(id, status)
  }
}

export const contactService = new ContactService()
